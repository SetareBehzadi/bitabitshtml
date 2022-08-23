/* ------------------------------------------------------------------------------------------ */
/*                                    MAIN MENU:  VERTICAL                                    */
/* ------------------------------------------------------------------------------------------ */

/* -----------------------------------       LEVELS       ----------------------------------- */
function mainMenuVerticalLevels() {
	let ul = jQuery('[data-menu="vertical"] > ul')
	while ((ul = ul.children('li:not(._mega)').children('ul')).length > 0) {
		ul.addClass('level_n')
	}
}


/* -----------------------------------       PARENTS      ----------------------------------- */
function mainMenuVerticalParent() {
	const li = jQuery('[data-menu="vertical"] li')
	li.each(function() {
		if (jQuery(this).children('ul').length) {
			jQuery(this).addClass('_parent')
		}
	})
}


/* -----------------------------------        MEGA        ----------------------------------- */
function mainMenuVerticalMega() {
	const li = jQuery('[data-menu="vertical"] ._mega > ul > li')
	li.each(function() {
		if (!jQuery(this).hasClass('_parent')) {
			jQuery(this).remove()
		}
	})
}


/* -----------------------------------      ACCORDION     ----------------------------------- */
function mainMenuVerticalAccordion() {

	jQuery('[data-menu="vertical"] ._mega._parent').each(function() {
		let link = jQuery(this).children('a')
		link.attr('href', 'javascript:void(0)')
	})

	jQuery('[data-menu="vertical"] ._mega._parent > ul > ._parent').each(function() {
		let link = jQuery(this).children('a')
		link.attr('href', 'javascript:void(0)')
	})

	jQuery('[data-menu="vertical"] ._parent > a').click(function() {
		var $this = jQuery(this)
		if ($this.parent().hasClass('_open')) {
			$this.parent().removeClass('_open')
			$this.next().slideUp()
		} else {
			$this.parent().parent().find('._parent').removeClass('_open')
			$this.parent().parent().find('._parent > ul').slideUp()
			$this.parent().toggleClass('_open')
			$this.next().slideDown()
		}
	})

}
