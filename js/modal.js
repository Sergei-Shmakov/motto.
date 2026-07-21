;(() => {
	const modalOverlay = document.getElementById('overlay')
	const closeButton = document.getElementById('closeModal')

	if (!modalOverlay || !closeButton) return

	closeButton.addEventListener('click', () => {
		modalOverlay.classList.remove('is-active')
	})

	modalOverlay.addEventListener('click', e => {
		if (e.target === modalOverlay) {
			modalOverlay.classList.remove('is-active')
		}
	})
})()
