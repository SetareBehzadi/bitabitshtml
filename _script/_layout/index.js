/* ------------------------------------------------------------------------------------------ */
/*                                           LAYOUT                                           */
/* ------------------------------------------------------------------------------------------ */

function mainMenuScrollFixe(){
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
      $('.headerMain').addClass('sticky')
  }else {
      $('.headerMain').removeClass('sticky')
  }
}
