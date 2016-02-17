
$(document).ready(function() {
	
	/*
	$('body').onepage_scroll({
		sectionContainer: '.onepage-item',
		responsiveFallback: 600,
		loop: false,
	});
	*/
	$('#carousel-example-generic').on('slid.bs.carousel', function () {
		
		var i = $(this).find('.carousel-inner .item.active').index();
		
		switch(i) {
			
			case 0:{
				$(this).find('._inp-carousel__inner').removeClass('c-arrow r-arrow').addClass('l-arrow');
			}
			break;
			case 1:{
				$(this).find('._inp-carousel__inner').removeClass('l-arrow r-arrow').addClass('c-arrow');
			}
			break;
			case 2:{
				$(this).find('._inp-carousel__inner').removeClass('c-arrow l-arrow').addClass('r-arrow');
			}
			break;
			default:{
				
			}
			break;
			
		}
		
	});
	
	$(window).on('resize',function(event){
	
	}).trigger('resize');
	
	
	$(window).on('scroll',function(){
		
		$(
			function() {
				
				var pos = $(document).scrollTop();
				
				var block = $('.navbar.navbar-default._index__navbar').eq(0);
				var index__header = $('.index__header').eq(0);
				
				var borderline = index__header.height() - (block.height() * 0.6);
				
				if(pos < borderline) {
					if(block.hasClass('bg-white')) {
						block.removeClass('bg-white');
					}
					if(!block.hasClass('bg-transparent')) {
						block.addClass('bg-transparent');
					}
				}
				if(pos > borderline) {
					if(block.hasClass('bg-transparent')) {
						block.removeClass('bg-transparent');
					}
					if(!block.hasClass('bg-white')) {
						block.addClass('bg-white');
					}
				}
			}
		);
		
	}).trigger('scroll');
	
	
	$('body').on('changeClass',function(){
	
	});
	
});
