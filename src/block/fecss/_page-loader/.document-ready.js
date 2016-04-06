
	$('.page-loader .close-loader').on('click',function(event){
		event.preventDefault();
		$('.page-loader').removeClass('active');
	});
	
	$(document.body).on('click.fecss', 'div.page-loader.full-screen.rkorma-style.active .blind' ,function(event){
		event.preventDefault();
		$('div.page-loader.full-screen.rkorma-style')
			.data('window-can-close-it', true)
			.data('counter-can-close-it', true)
			.trigger('fecss.can-close-it');
	});
	
	$(document.body).on('fecss.can-close-it', 'div.page-loader.full-screen.rkorma-style' ,function(event){
		event.preventDefault();
		
		if($(this).data('counter-can-close-it') && $(this).data('window-can-close-it')) {
			$(this).removeClass('active');//.delay(2000).empty().remove();
		}
		
	});
	
	$(window).load(function(event){
		event.preventDefault();
		
		$('div.page-loader.full-screen.rkorma-style')
			.data('window-can-close-it', true)
			.trigger('fecss.can-close-it');
		
		$('div.page-loader.full-screen.rkorma-style .blind').data('fast-page-loading', true);
	});