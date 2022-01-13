let localStorage = window.localStorage

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
}