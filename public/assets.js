const MARKERS = ['logo', 'detector', 'antenna', 'telegrafo']

function loadAssets() {
	let assets = []

	MARKERS.forEach(marker =>
		assets.push(
			createElement(
				'a-asset',
				{ id: `${marker}-obj`, src: `assets/${marker}.obj` }
			),
			createElement(
				'a-asset',
				{ id: `${marker}-mtl`, src: `assets/${marker}.mtl` }
			)
		)
	)

	return createElement('a-assets', {}, ...assets)
}

const generateMarkers = () =>
	MARKERS
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
							position: '0 0 0',
							scale: '1 1 1',
						}
					),
					createElement(
						'a-text',
						{
							value: 'G. Marconi (1874-1937)',
							color: 'white',
							'look-at': '[camera]',
						}
					)
				)

				marker.addEventListener('markerFound', onMarkerFound)

				return marker;
			}
		)