window.onload = () => {
	setTimeout(
		() => navigator
			.geolocation
			.getCurrentPosition(
				position => {
					document
						.querySelector("#info")
						.innerHTML =
						`${position.coords.latitude} ${position.coords.longitude}) ${position.coords.accuracy}`

					// document
					// 	.querySelector("#block")
					// 	.remove()

					document
						.querySelector("#antenna")
						.setAttribute(
							'gps-entity-place',
							`latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`
						)

					document
						.querySelector("#detector")
						.setAttribute(
							'gps-entity-place',
							`latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`
						)
				},
				() => { },
				{
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: Infinity
				}
			),
		2000
	)
}