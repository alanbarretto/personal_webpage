$(document).ready(function(){

	var navHeight = $('nav').outerHeight();
	console.log(navHeight);


	$('.class-nav-link').click(function(e){

		var linkHref = $(this).attr('href');
		/*console.log($(linkHref).offset().top);*/

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - navHeight
		}, 1000);
		e.preventDefault();

	});
});