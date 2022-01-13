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
		particleCount: 50,
		spread: 160,
		scalar: 2.5,
		ticks: 400
	})

	animation()
}

function share() {
	let markers = new Set(JSON.parse(localStorage.getItem('foundMarkers'))) || new Set()

	navigator.share({
		title: 'Marconi AR',
		text: `Trovali tutti! Io ne ho trovati ${markers.size}!`,
		url: window.location.href
	})
}

function restart() {
	if (confirm("Ricominciare da capo?")) {
		localStorage.setItem('foundMarkers', JSON.stringify([]))
		document
			.querySelector('#found')
			.innerHTML = `0/8`
	}
}