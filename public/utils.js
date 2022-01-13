function createElement(tag, attributes, ...children) {
	let element = document.createElement(tag)

	if (attributes)
		for (const [name, value] of Object.entries(attributes))
			element.setAttribute(name, value)

	if (children)
		element.append(...children)

	return element
}

function generateConfetti() {
	let animation = confetti.create(
		document.querySelector('#confetti'),
		{ resize: true, useWorker: true }
	)

	animation({
		particleCount: 100,
		spread: 160
	})

	animation()
}

const onMarkerFound = event => {
	let markers = new Set(JSON.parse(localStorage.getItem('foundMarkers'))) || new Set()

	if (!markers.has(event.target.id))
		generateConfetti()

	markers.add(event.target.id)

	localStorage.setItem('foundMarkers', JSON.stringify([...markers]))

	document
		.querySelector('#info')
		.innerHTML = `Trovati ${markers.size} su 8`
}

function share() {
	navigator.share({
		title: 'Marconi AR',
		text: 'Trovali tutti!',
		url: window.location.href
	})
}
