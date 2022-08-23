/* ------------------------------------------------------------------------------------------ */
/*                                          COMPONENT                                         */
/* ------------------------------------------------------------------------------------------ */
$('._responsive .menu-item-has-children > a').click(function(e) {
	e.preventDefault();
	var el = $(this);
	// console.log(el);
	var parentEl = el.parent();
	parentEl.find('.menu-item-has-children').removeClass('open');
	parentEl.siblings().removeClass('open');
	parentEl.siblings().find('.menu-item-has-children').removeClass('open');
	parentEl.toggleClass('open');
})


$('.add_new_card .add-card').click(function(e) {
	e.preventDefault();
	var elParent = $(this).parent();

	elParent.addClass('hidden');
	elParent.next().removeClass('hidden');
})

$('.add_new_card ._cancel').click(function(e) {
	e.preventDefault();
	var elParent1 = $(this).closest('._form');

	elParent1.addClass('hidden');
	elParent1.prev().removeClass('hidden');
})


$('.form-element ._edit_form').click(function(e) {
	e.preventDefault();
	var elParent = $(this).parent();

	$('.form-element input').prop('readonly', false);
	$('.form-element .pv_select select').prop('disabled', false);
	$('.form-element .pv_select').removeClass('readonly');
	$('.user_pro_form').addClass('_edit_form');

	elParent.addClass('hidden');
	elParent.next().removeClass('hidden');
})

$('.form-element ._cancel1').click(function(e) {
	e.preventDefault();
	var elParent1 = $(this).parent();

	$('.form-element input').prop('readonly', true);
	$('.form-element .pv_select select').prop('disabled', true);
	$('.form-element .pv_select').addClass('readonly');
	$('.user_pro_form').removeClass('_edit_form');

	elParent1.addClass('hidden');
	elParent1.prev().removeClass('hidden');
})


function copy(selector){
  var $temp = $("<div>");
  $("body").append($temp);
  $temp.attr("contenteditable", true)
       .html($(selector).html()).select()
       .on("focus", function() { document.execCommand('selectAll',false,null); })
       .focus();
	   alert('کد بک آپ شناسایی دو عاملی کپی شد.')
  document.execCommand("copy");
  $temp.remove();
}
