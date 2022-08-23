/* ------------------------------------------------------------------------------------------ */
/*                                       CORE VARIABLES                                       */
/* ------------------------------------------------------------------------------------------ */

const DIRECTION = jQuery('html').attr('dir')

const SITE_DIRECTION_RTL = (DIRECTION == 'rtl') ? true : false

const SITE_ALIGN_DEFAULT = (DIRECTION == 'rtl') ? 'right' : 'left'

const SITE_ALIGN_OPPOSITE = (DIRECTION == 'rtl') ? 'left' : 'right'

const HOST_URL = jQuery('html').data('hosturl')

var WINDOW_WIDTH = parstFloatRound(jQuery(window).width())
