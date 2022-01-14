let title = 'Gotta Find ‘Em All!';

const MARKERS = ['logo', 'antenna', 'detector', 'telegrafo', 'sphere', 'marconi', 'question']

const DESCRIPTIONS = [
	{
		title: 'Logo festival VR',
		description: 'Hai partecipato al festival VR? Rivedi le registrazioni su studenti.marconicloud.it/vrfestival'
	},
	{
		title: 'Antenna monopolo (1896)',
		description: 'Riceve ed invia onde radio anche a lunghe distanze. È tutt’ora utilizzata dalle stazioni radio.'
	},
	{
		title: 'Detector magnetico (1902)',
		description: 'Rilevatore di onde radio, molto utilizzato per ricevere messaggi telegrafici data la sua grande affidabilità e resistenza alle vibrazioni.'
	},
	{
		title: 'Telegrafo senza fili (1894-1895)',
		description: 'Trasmette messaggi tramite onde radio, unico metodo di comunicazione a lunga distanza fino alla Prima guerra mondiale.'
	},
	{
		title: 'Project Fairytale',
		description: 'Non sai cos\'è "Project Fairytale"?!? Scoprilo su studenti.marconicloud.it/vrfestival!'
	},
	{
		title: 'G. Marconi Civitavecchia',
		description: 'La nostra scuola 😊!'
	},
	{
		title: 'Primo premio',
		description: 'Questo posto è riservato al vincitore del contest di modellazione 3D! Hai già inviato i tuoi modelli? Vai su studenti.marconicloud.it/vrfestival.'
	},
	{
		title: 'Magnemite',
		description: 'È comparso un Magnemite selvatico!'
	}
]

const onMarkerFound = event => {
	setTimeout(() => {
		let markers = new Set(JSON.parse(localStorage.getItem('foundMarkers'))) || new Set()

		if (!markers.has(event.target.id))
			generateConfetti()

		markers.add(event.target.id)

		localStorage.setItem('foundMarkers', JSON.stringify([...markers]))

		if (markers.size == 8)
			title = '👏 Li hai trovati tutti! 🎉'

		document
			.querySelector('#found')
			.innerHTML = `${markers.size}/8`

		document
			.querySelector('#title')
			.innerHTML = DESCRIPTIONS[event.target.id].title

		let description = document
			.querySelector('#description')

		description.classList.remove('invisible')
		description.innerHTML = DESCRIPTIONS[event.target.id].description
	}, 300);
}

const onMarkerLost = () => {
	document
		.querySelector('#title')
		.innerHTML = title

	let description = document
		.querySelector('#description')

	description.classList.add('invisible')
	description.innerHTML = ''
}

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
					)
				)

				marker.addEventListener('markerFound', onMarkerFound)
				marker.addEventListener('markerLost', onMarkerLost)

				return marker;
			}
		)