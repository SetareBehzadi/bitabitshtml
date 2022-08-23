/* ------------------------------------------------------------------------------------------ */
/*                                 CORE FUNCTION:  APART FROM                                 */
/* ------------------------------------------------------------------------------------------ */
jQuery.fn.apartFrom = function(ename, cb) {

	return this.each(function() {

		var jQuerythis = jQuery(this),
			self = this

		jQuery(document).bind(ename, function tempo(e) {
			if (e.target !== self && !jQuery.contains(self, e.target)) {
				cb.apply(self, [e])
				if (!self.parentNode) jQuery(document.body).unbind(ename, tempo)
			}
		})

	})

}


/* ------------------------------------------------------------------------------------------ */
/*                              CORE FUNCTION: PARSE FLOAT ROUND                              */
/* ------------------------------------------------------------------------------------------ */
function parstFloatRound(int) {

	const intel = Math.round(parseFloat(parseInt(int)))

	if (!Number.isFinite(intel)) return

	return intel

}
