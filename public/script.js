let localStorage = window.localStorage

const markers = ['logo', 'detector', 'antenna', 'telegrafo']

window.onload = () => {
	localStorage.setItem('foundMarkers', JSON.stringify([]))

	let scene = document.querySelector('a-scene')

	let magnemite = createElement(
		'a-marker',
		{
			id: 'magnemite',
			value: '7',
			type: 'barcode',
			emitevent: 'true',
		},
		createElement(
			'a-entity',
			{
				id: 'magnemite',
				'gltf-model': './assets/magnemite/scene.gltf',
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

	// setTimeout(() => { animation.reset() }, 1000)
}



// const generateMarkers = () =>
// 	markers
// 		.map(
// 			(name, value) => {
// 				let marker = createElement(
// 					'a-marker',
// 					{
// 						id: `${value}`,
// 						value: `${value}`,
// 						type: 'barcode',
// 						emitevent: 'true',
// 					},
// 					createElement(
// 						'a-obj-model',
// 						{
// 							id: name,
// 							src: `#${name}-obj`,
// 							mtl: `#${name}-mtl`,
// 							position: '0 0 0',
// 							scale: '1 1 1',
// 						}
// 					),
// 					createElement(
// 						'a-text',
// 						{
// 							value: 'G. Marconi (1874-1937)',
// 							color: 'white',
// 							'look-at': '[camera]',
// 						}
// 					)
// 				)

// 				marker.addEventListener('markerFound', onMarkerFound)

// 				return marker;
// 			}
// 		)


//  <a-obj-model id="telegrafo" src="#telegrafo-obj" mtl="#telegrafo-mtl" position="0 0 0" scale="1 1 1">
// </a-obj-model>


// {/* <a-entity gltf-model="#antenna-glb" position="0 0 0" scale="10 10 10"></a-entity>  */ }