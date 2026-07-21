const gallerySwiper = new Swiper('.gallerySwiper', {
	loop: true,

	speed: 900,

	centeredSlides: true,

	grabCursor: true,

	slidesPerView: 2.3,

	spaceBetween: 30,

	watchSlidesProgress: true,

	navigation: {
		nextEl: '.gallery-next',

		prevEl: '.gallery-prev',
	},

	pagination: {
		el: '.swiper-pagination',

		clickable: true,
	},

	autoplay: {
		delay: 3500,

		disableOnInteraction: false,
	},

	breakpoints: {
		0: {
			slidesPerView: 1.08,

			spaceBetween: 15,
		},

		640: {
			slidesPerView: 1.35,

			spaceBetween: 18,
		},

		992: {
			slidesPerView: 2.1,

			spaceBetween: 25,
		},

		1400: {
			slidesPerView: 2.3,

			spaceBetween: 30,
		},
	},
})
