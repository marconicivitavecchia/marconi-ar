let localStorage = window.localStorage

const markers = ['logo', 'antenna', 'detector', 'telegrafo', 'sphere']
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
	},
]

/*Antenna monopolo 1896 

Riceve ed invia onde radio anche a lunghe distanze. Sono tutt’ora utilizzate dalle stazioni radio. 

 

Detector Magnetico 1902 

Rilevatore di onde radio, molto utilizzato per ricevere messaggi telegrafici data la sua grande affidabilità e resistenza alle vibrazioni. 

 

Telegrafo senza fili 1894-1895 

Trasmettere messaggi tramite onde radio, unico metodo di comunicazione a lunga distanza fino alla Prima guerra mondiale, dove si iniziò ad utilizzare la radio per trasmettere, tramite le frequenze AM la voce. 

 

Magnemite  

Hai catturato Magnemite selvatico! 

 

Project Fairytale 

Non hai ancora giocato a Project Fairytale per Oculus?!? 

 

Logo Scuola 

Questo è il logo della nostra scuola 

 

Logo Evento 

Questo è il logo dell’evento organizzato dalla nostra scuola, direttamente dal nostro Giardino Virtuale*/

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