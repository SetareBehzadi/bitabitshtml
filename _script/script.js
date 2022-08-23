/* ------------------------------------------------------------------------------------------ */
/*                                   EVENT:  DOCUMENT READY                                   */
/* ------------------------------------------------------------------------------------------ */
jQuery(document).ready(function() {

	mainMenuHorizontalLevels()
	mainMenuHorizontalParent()
	mainMenuHorizontalMegaWrapper()
	mainMenuHorizontalHover()

	mainMenuVerticalLevels()
	mainMenuVerticalParent()
	mainMenuVerticalMega()


}) // END DOCUMENT.READY()


/* ------------------------------------------------------------------------------------------ */
/*                                   EVENT: DOCUMENT SCROLL                                   */
/* ------------------------------------------------------------------------------------------ */
jQuery(document).scroll(function() {
	mainMenuScrollFixe();

}) // END DOCUMENT.SCROLL()


/* ------------------------------------------------------------------------------------------ */
/*                                    EVENT: WINDOW RESIZE                                    */
/* ------------------------------------------------------------------------------------------ */
jQuery(window).resize(function() {

	WINDOW_WIDTH = parstFloatRound(jQuery(window).width())

	mainMenuHorizontalHover()

}) // END WINDOW.RESIZE()


/* ------------------------------------------------------------------------------------------ */
/*                                     EVENT: WINDOW LOAD                                     */
/* ------------------------------------------------------------------------------------------ */
jQuery(window).on('load', function() {

	jQuery('body').removeClass('_load_before')
	jQuery('body').addClass('_load')

	mainMenuVerticalAccordion()

}) // END WINDOW.ONLOAD()


/* ------------------------------------------------------------------------------------------ */
/*                                         FOUNDATION                                         */
/* ------------------------------------------------------------------------------------------ */
jQuery(document).foundation()
