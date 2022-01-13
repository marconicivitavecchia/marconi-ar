let localStorage = window.localStorage

window.onload = () => {
	if (!localStorage.getItem('foundMarkers'))
		localStorage.setItem('foundMarkers', JSON.stringify([]))
	else {
		let markers = new Set(JSON.parse(localStorage.getItem('foundMarkers'))) || new Set()

		document
			.querySelector('#found')
			.innerHTML = `${markers.size}/8`
	}

	let scene = document.querySelector('a-scene')

	let magnemite = createElement(
		'a-marker',
		{
			id: '7',
			value: '7',
			type: 'barcode',
			emitevent: 'true',
		},
		createElement(
			'a-entity',
			{
				id: 'magnemite',
				'gltf-model': 'assets/magnemite/scene.gltf',
				scale: '0.15 0.15 0.15',
				'animation-mixer': ''
			}
		)
	)

	magnemite.addEventListener('markerFound', onMarkerFound)
	magnemite.addEventListener('markerLost', onMarkerLost)

	scene.append(
		loadAssets(),
		...generateMarkers(),
		magnemite
	)
}