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
	
	var ib_slider;
	
	$(document.body).on('click.fecss', '.header-arrow', function(event){
		event.preventDefault();
		
		if(ib_slider) {
			ib_slider = setTimeout(function(){
				
				var ib = $('.index__header');
				ib.find('.header-arrow.right').trigger('click');
				
			},7777);
		}
		
		var btn = $(this);
		var block = $('.index__header');
		
		/*
		if(btn.hasClass('left')) {
			
			if(block.hasClass('mod-1')) {
				block.toggleClass('mod-1');
			} else if(block.hasClass('mod-2')) {
				block.toggleClass('mod-2 mod-1');
			} else if(block.hasClass('mod-3')) {
				block.toggleClass('mod-3 mod-2');
			} else if(!block.hasClass('mod-1') && !block.hasClass('mod-2') && !block.hasClass('mod-3')) {
				block.toggleClass('mod-3');
			} 
			
		} else if(btn.hasClass('right')) {
			
			if(block.hasClass('mod-1')) {
				block.toggleClass('mod-1 mod-2');
			} else if(block.hasClass('mod-2')) {
				block.toggleClass('mod-2 mod-3');
			} else if(block.hasClass('mod-3')) {
				block.toggleClass('mod-3');
			} else if(!block.hasClass('mod-1') && !block.hasClass('mod-2') && !block.hasClass('mod-3')) {
				block.toggleClass('mod-1');
			} 
			
		}
		*/
		
		if(btn.hasClass('left')) {
			
			if(block.hasClass('mod-1')) {
				block.toggleClass('mod-1');
			} else if(block.hasClass('mod-2')) {
				block.toggleClass('mod-2 mod-1');
			} else if(0) {
				block.toggleClass('mod-3 mod-2');
			} else if(!block.hasClass('mod-1') && !block.hasClass('mod-2')) {
				block.toggleClass('mod-2');
			} 
			
		} else if(btn.hasClass('right')) {
			
			if(block.hasClass('mod-1')) {
				block.toggleClass('mod-1 mod-2');
			} else if(block.hasClass('mod-2')) {
				block.toggleClass('mod-2');
			} else if(!block.hasClass('mod-1') && !block.hasClass('mod-2')) {
				block.toggleClass('mod-1');
			} 
			
		}
		
		//$('.index__header').toggleClass('mod-1');
	});
	
	ib_slider = setTimeout(function(){
		
		var ib = $('.index__header');
		ib.find('.header-arrow.right').trigger('click');
		
		ib_slider = setInterval(function(){
			
			var ib = $('.index__header');
			ib.find('.header-arrow.right').trigger('click');
			
		},7777);
		
	},12000);
	
	
	
	
	$(window).on('scroll',function(){
		
		var pos = $(window).scrollTop();
		
	}).trigger('scroll');
	
	
	
	
	
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
				
			}, 77);
		}
	});
	
});
