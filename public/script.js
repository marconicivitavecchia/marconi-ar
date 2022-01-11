let localStorage = window.localStorage

const ASSETS = [
	{ id: 'antenna-obj', src: './assets/antenna-uhf.obj' },
	{ id: 'antenna-mtl', src: './assets/antenna-uhf.mtl' },
	{ id: 'detector-obj', src: 'assets/detector-magnetico.obj' },
	{ id: 'detector-mtl', src: 'assets/detector-magnetico.mtl' },
	{ id: 'telegrafo-obj', src: 'assets/telegrafo.obj' },
	{ id: 'telegrafo-mtl', src: 'assets/telegrafo.mtl' },
]

const markers = ['antenna', 'telegrafo', 'detector']

window.onload = () => {
	localStorage.setItem('foundMarkers', JSON.stringify([]))

	let scene = document.querySelector('a-scene')

	let magnemite = createElement(
		'a-marker',
		{
			id: 'magnemite',
			value: '3',
			type: 'barcode',
			emitevent: 'true',
		},
		createElement(
			'a-entity',
			{
				id: 'magnemite',
				'gltf-model': './assets/magnemite/scene.gltf',
				position: '0 0 0',
				scale: '0.15 0.15 0.15',
				'animation-mixer': ''
			}
		)
	)

	magnemite.addEventListener('markerFound', onMarkerFound)

	scene.append(
		loadAssets(),
		...generateMarkers(),
		magnemite
	)
}

function createElement(tag, attributes, ...children) {
	let element = document.createElement(tag)

	if (attributes)
		for (const [name, value] of Object.entries(attributes))
			element.setAttribute(name, value)

	if (children)
		element.append(...children)

	return element
}

const onMarkerFound = (event) => {
	let markers = new Set(JSON.parse(localStorage.getItem('foundMarkers'))) || new Set()
	markers.add(event.target.id)
	localStorage.setItem('foundMarkers', JSON.stringify([...markers]))

	document
		.querySelector('#info')
		.innerHTML = `Trovati ${markers.size} su 5`
}

const loadAssets = () =>
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



const generateMarkers = () =>
	markers
		.map(
			(name, value) => {
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
							id: name,
							src: `#${name}-obj`,
							mtl: `#${name}-mtl`,
							position: "0 0 0",
							scale: "1 1 1",
						}
					),
					createElement(
						'a-text',
						{ value: 'G. Marconi (1874-1937)' }
					)
				)

				marker.addEventListener('markerFound', onMarkerFound)

				return marker;
			}
		)


//  <a-obj-model id="telegrafo" src="#telegrafo-obj" mtl="#telegrafo-mtl" position="0 0 0" scale="1 1 1">
// </a-obj-model>


// {/* <a-entity gltf-model="#antenna-glb" position="0 0 0" scale="10 10 10"></a-entity>  */ }