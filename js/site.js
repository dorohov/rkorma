/*
function isVis(s){
	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();
	var currentEls = $(s);
	var result = [];
	currentEls.each(function(){
		var el = $(this);
		var offset = el.offset();
		if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
			result.push(this);
	});
	return $(result);
}
*/

$(document).ready(function() {
	
	/*
	window.sr = ScrollReveal({ reset: true });
	for(var i = 1; i < ($('.index__products ._i-products__item').size() + 1); i++) {
		window.sr.reveal('.index__products ._i-products__item:nth-child(' + i + ')', { delay : 100 * i, duration: 500 * i } );
	}
	for(var i = 1; i < ($('.index__blog ._i-blog__item').size() + 1); i++) {
		window.sr.reveal('.index__blog ._i-blog__item', { delay : 100 , duration: 350 * i } );
	}
	*/
	
	$('#carousel-example-generic').on('slid.bs.carousel', function () {
		
		var i = $(this).find('.carousel-inner .item.active').index();
		
		if(!$(document.body).hasClass('window-width-md') ) {
			
			switch(i) {
				
				case 0:{
					$(this).find('._inp-carousel__inner').removeClass('m-arrow b-arrow').addClass('t-arrow');
				}
				break;
				case 1:{
					$(this).find('._inp-carousel__inner').removeClass('t-arrow b-arrow').addClass('m-arrow');
				}
				break;
				case 2:{
					$(this).find('._inp-carousel__inner').removeClass('t-arrow m-arrow').addClass('b-arrow');
				}
				break;
				default:{
					
				}
				break;
				
			}
			
		} else {
			
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
			
		}
		
	});
	
	$(document.body).on('click.fecss', '.header-arrow', function(event){
		event.preventDefault();
		
		$('.index__header').toggleClass('mod-1');
	});
	
	setInterval(function(){
		
		var ib = $('.index__header');
		if(ib.hasClass('mod-1')) {
			ib.removeClass('mod-1');
		} else {
			ib.addClass('mod-1');
		}
		
	},7000);
	
	
	
	
	$(window).on('scroll',function(){
		
		var pos = $(window).scrollTop();
		
	}).trigger('scroll');
	
	
	$('body').on('changeClass',function(){
	
		$(
			function() {
				
				/*
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
				*/
				
				if($('body').hasClass('fp-viewing-0')) {
					$('.navbar.navbar-default').addClass('bg-transparent').removeClass('bg-white');
				} else {
					$('.navbar.navbar-default').addClass('bg-white').removeClass('bg-transparent');
				}
				
			}
		);
	
	});
	
	
	$(function(){
		var pl = $('div.page-loader.full-screen.rkorma-style.active');
		var b = $('.blind', pl).eq(0);
		
		if(b.size()) {
			
			var pos = -10;
			
			b.css({
				'left' : pos + '%',
				'bottom' : pos + '%',
				'top' : pos + '%',
				'right' : pos + '%',
			}).attr('data-pos', pos);
			
			var intr = setInterval(function() {
				
				var check = Math.random();
				if(check > 0.5 && pos < 100) {
					pos++;
					
					if(b.data('fast-page-loading')) {
						pos = pos + 6;
					}
					
					var h = pos / 2;
					
					b.css({
						'left' : h + '%',
						'bottom' : h + '%',
						'top' : h + '%',
						'right' : h + '%',
					}).attr('data-pos', pos);//, 'height' : h + '%'
				} else if(pos > 99) {
					clearInterval(intr);
					$('div.page-loader.full-screen.rkorma-style')
						.data('counter-can-close-it', true)
						.trigger('fecss.can-close-it');
				}
				
			}, 55);
		}
	});
	
});
