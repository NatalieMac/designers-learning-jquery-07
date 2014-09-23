$('.show dt').on('click', function(){
	// $(this).next('dd').hide();
	// $(this).next('dd').show();
	$(this).next('dd').toggle();
});

$('.slide dt').on('click', function(){
	// $(this).next('dd').slideUp();
	// $(this).next('dd').slideDown();
	$(this).next('dd').slideToggle();
});

$('.fade dt').on('click', function(){
	// $(this).next('dd').fadeOut();
	// $(this).next('dd').fadeIn();
	// $(this).next('dd').fadeToggle();
	$(this).next('dd').fadeTo('slow', '0.4');
});