const ASSETS = [
	{ id: 'antenna-obj', src: 'assets/antenna-uhf.obj' },
	{ id: 'antenna-mtl', src: 'assets/antenna-mtl.obj' },
	{ id: 'detector-obj', src: 'assets/detector-magnetico.obj' },
	{ id: 'detector-mtl', src: 'assets/detector-magnetico.mtl' },
	{ id: 'telegrafo-obj', src: 'assets/telegrafo.obj' },
	{ id: 'telegrafo-mtl', src: 'assets/telegrafo.mtl' },
]



function createElement(tag, attributes, children) {
	let element = document.createElement(tag)

	if (attributes)
		for (const [name, value] of Object.entries(attributes))
			element.setAttribute(name, value)

	if (children)
		element.append(children)

	return element;
}

window.onload = () => {
	// AFRAME.regi
	let scene = document.querySelector('a-scene')

	for (let value = 0; value <= 5; value++) {
		scene.append(
			createElement(
				'a-marker',
				{
					'value': `${value}`,
					type: 'barcode',
					emitevent: 'true',
				},
				createElement(
					'a-obj-model',
					{
						id: 'telegrafo',
						src: '#telegrafo-obj',
						mtl: '#telegrafo-mtl',
						position: '0 0 0',
						scale: '1 1 1',
					}
				)
			)
		)
	}

	// let assets = createElement('a-assets')

	// for (asset of assets) {
	// }
}

// createElement(
// 	'a-entity',
// 	{
// 		'gltf-model': '#antenna-glb',
// 		position: '0 0 0',
// 		scale: '2 2 2',
// 	}
// )

//  <a-obj-model id="telegrafo" src="#telegrafo-obj" mtl="#telegrafo-mtl" position="0 0 0" scale="1 1 1">
// </a-obj-model>


// {/* <a-entity gltf-model="#antenna-glb" position="0 0 0" scale="10 10 10"></a-entity>  */ }