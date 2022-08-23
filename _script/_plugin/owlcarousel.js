/* ------------------------------------------------------------------------------------------ */
/*                                      OWL CAROUSEL: X1                                      */
/* ------------------------------------------------------------------------------------------ */
function owlCarouselX1() {

	if (!jQuery('[data-owlcarousel="x1"]').length) return

	jQuery('[data-owlcarousel="x1"]').owlCarousel({
		items: 2,
		autoplay: false,

		nav: true,
		navText: [
			'<i class="icon-chevron-points-left" aria-label="' + 'Previous' + '"></i>',
			'<i class="icon-chevron-points-right" aria-label="' + 'Next' + '"></i>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: false,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false,

		loop: true,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 100,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: true,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {
			0: {
				items: 1
			},
			1024: {
				items: 2
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	})

}


/* ------------------------------------------------------------------------------------------ */
/*                                      OWL CAROUSEL: X2                                      */
/* ------------------------------------------------------------------------------------------ */
function owlCarouselX2() {

	if (!jQuery('[data-owlcarousel="x2"]').length) return

	jQuery('[data-owlcarousel="x2"]').owlCarousel({
		items: 1,
		autoplay: true,

		nav: true,
		navText: [
			'<i class="icon-chevron-points-left" aria-label="' + 'Previous' + '"></i>',
			'<i class="icon-chevron-points-right" aria-label="' + 'Next' + '"></i>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false,

		loop: true,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 100,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: true,

		smartSpeed: 500,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	})

}


/* ------------------------------------------------------------------------------------------ */
/*                                      OWL CAROUSEL: X3                                      */
/* ------------------------------------------------------------------------------------------ */
function owlCarouselX3() {

	if (!jQuery('[data-owlcarousel="x3"]').length) return

	jQuery('[data-owlcarousel="x3"]').owlCarousel({
		items: 6,
		autoplay: false,

		nav: true,
		navText: [
			'<i class="icon-chevron-left" aria-label="' + 'Previous' + '"></i>',
			'<i class="icon-chevron-right" aria-label="' + 'Next' + '"></i>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: false,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false,

		loop: true,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: true,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {
			0: {
				items: 2
			},
			1024: {
				items: 6
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	})

}
