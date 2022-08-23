/* ------------------------------------------------------------------------------------------ */
/*                                   MAIN MENU:  HORIZONTAL                                   */
/* ------------------------------------------------------------------------------------------ */

/* -----------------------------------       LEVELS       ----------------------------------- */
function mainMenuHorizontalLevels() {
	let ul = jQuery('[data-menu="horizontal"] > ul')
	while ((ul = ul.children('li:not(._mega)').children('ul')).length > 0) {
		ul.addClass('level_n')
	}
}


/* -----------------------------------       PARENTS      ----------------------------------- */
function mainMenuHorizontalParent() {
	const li = jQuery('[data-menu="horizontal"] li')
	li.each(function() {
		if (jQuery(this).children('ul').length) {
			jQuery(this).addClass('_parent')
		}
	})
}


/* -----------------------------------    MEGA WRAPPER    ----------------------------------- */
function mainMenuHorizontalMegaWrapper() {
	let ul
	jQuery('[data-menu="horizontal"] ._mega').each(function() {
		ul = jQuery(this).children('ul')
		jQuery('<div/>', { class: '_megaWrapper' }).appendTo(jQuery(this))
		ul.appendTo(jQuery(this).children('._megaWrapper'))
	})
}


/* -----------------------------------        HOVER       ----------------------------------- */
function mainMenuHorizontalHover() {

	const basic = jQuery('[data-menu="horizontal"] ._basic._parent, [data-menu="horizontal"] ._basic ._parent')
	const mega = jQuery('[data-menu="horizontal"] ._mega')

	if (window.matchMedia('(min-width: 785px)').matches) {
		basic.mouseenter(function() {
			 // jQuery(this).children('ul').stop(true).slideDown(300)
			jQuery(this).children('ul').addClass('animate__animated animate__fadeInUp')
		})
		basic.mouseleave(function() {
			// jQuery(this).children('ul').slideUp(150)
			jQuery(this).children('ul').removeClass('animate__animated animate__fadeInUp')
		})
		mega.mouseenter(function() {
			// jQuery(this).children('._megaWrapper').stop(true).slideDown(300)
			jQuery(this).children('._megaWrapper').addClass('animate__animated animate__fadeInUp')
		})
		mega.mouseleave(function() {
			// jQuery(this).children('._megaWrapper').slideUp(150)
			jQuery(this).children('._megaWrapper').removeClass('animate__animated animate__fadeInUp')
		})
	} else {
		basic.unbind('mouseenter mouseleave')
		mega.unbind('mouseenter mouseleave')
	}

}
