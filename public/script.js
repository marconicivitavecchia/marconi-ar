const ASSETS = [
	{ id: 'antenna-obj', src: './assets/antenna-uhf.obj' },
	{ id: 'antenna-mtl', src: './assets/antenna-uhf.mtl' },
	{ id: 'detector-obj', src: 'assets/detector-magnetico.obj' },
	{ id: 'detector-mtl', src: 'assets/detector-magnetico.mtl' },
	{ id: 'telegrafo-obj', src: 'assets/telegrafo.obj' },
	{ id: 'telegrafo-mtl', src: 'assets/telegrafo.mtl' },
]

let localStorage = window.localStorage

function createElement(tag, attributes, ...children) {
	let element = document.createElement(tag)

	if (attributes)
		for (const [name, value] of Object.entries(attributes))
			element.setAttribute(name, value)

	if (children)
		element.append(...children)

	return element
}

window.onload = () => {
	let scene = document.querySelector('a-scene')

	localStorage.setItem('foundMarkers', JSON.stringify([]))

	scene.append(
		createElement(
			'a-assets',
			{},
			...ASSETS
				.map(
					({ id, src }) =>
						createElement(
							'a-asset',
							{ id: `${id}`, src: `${src}` }
						)
				)
		)
	)

	for (let value = 0; value <= 5; value++) {
		let marker = createElement(
			'a-marker',
			{
				id: `${value}`,
				value: `${value}`,
				type: 'barcode',
				emitevent: 'true',
			},
			createElement(
				'a-obj-model',
				{
					id: 'telegrafo',
					src: '#antenna-obj',
					mtl: '#antenna-mtl',
					position: '0 0 0',
					scale: '1 1 1',
				}
			)
		)

		marker.addEventListener(
			'markerFound',
			(event) => {
				let markers = new Set(JSON.parse(localStorage.getItem('foundMarkers'))) || new Set()
				markers.add(event.target.id)
				localStorage.setItem('foundMarkers', JSON.stringify([...markers]))

				document
					.querySelector('#info')
					.innerHTML = `Trovati ${markers.size} su 5`
			}
		)

		scene.append(marker)
	}
}

//  <a-obj-model id="telegrafo" src="#telegrafo-obj" mtl="#telegrafo-mtl" position="0 0 0" scale="1 1 1">
// </a-obj-model>


// {/* <a-entity gltf-model="#antenna-glb" position="0 0 0" scale="10 10 10"></a-entity>  */ }