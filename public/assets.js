const MARKERS = ['logo', 'antenna', 'detector', 'telegrafo', 'sphere', 'marconi']

const descriptions = [
	{
		title: 'Logo festival VR',
		description: 'Hai partecipato al festival VR? Non sai cosa ti sei perso!'
	},
	{
		title: 'Antenna monopolo (1896)',
		description: 'Riceve ed invia onde radio anche a lunghe distanze. Sono tutt’ora utilizzate dalle stazioni radio.'
	},
	{
		title: 'Detector Magnetico (1902)',
		description: 'Rilevatore di onde radio, molto utilizzato per ricevere messaggi telegrafici data la sua grande affidabilità e resistenza alle vibrazioni.'
	},
	{
		title: 'Telegrafo senza fili (1894-1895)',
		description: 'Trasmettere messaggi tramite onde radio, unico metodo di comunicazione a lunga distanza fino alla Prima guerra mondiale, dove si iniziò ad utilizzare la radio per trasmettere, tramite le frequenze AM la voce.'
	},
	{
		title: 'Project Fairytale',
		description: 'Non hai ancora giocato a Project Fairytale per Oculus?!? Vallo subito a provare!'
	},
	{
		title: 'Guglielmo Marconi Civitavecchia',
		description: 'Beh... che dire...'
	},
	{
		title: '',
		description: ''
	},
	{
		title: 'Magnemite',
		description: 'È comparso un Magnemite selvatico!'
	}
]

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
					// createElement(
					// 	'a-text',
					// 	{
					// 		value: 'G. Marconi (1874-1937)',
					// 		color: 'white',
					// 		'look-at': '[camera]',
					// 	}
					// )
				)

				marker.addEventListener('markerFound', onMarkerFound)

				return marker;
			}
		)