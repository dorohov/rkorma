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
	
	
	var steps = $('.stepbystep');
	steps.data('steping', true);
	var lastsbs = steps.eq(0);
	//$('html, body').css({scrollTop : 0});
	$('body').eq(0).data('lastpos', 0);
	
	
	
	window.sr = ScrollReveal({ reset: true });
	for(var i = 1; i < ($('.index__products ._i-products__item').size() + 1); i++) {
		window.sr.reveal('.index__products ._i-products__item:nth-child(' + i + ')', { delay : 100 * i, duration: 500 * i } );
	}
	for(var i = 1; i < ($('.index__blog ._i-blog__item').size() + 1); i++) {
		window.sr.reveal('.index__blog ._i-blog__item', { delay : 100 , duration: 350 * i } );
	}
	
	
	
	
	
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
		
		var pos = $(window).scrollTop();
		
		$(
			function() {
				
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
		
		
		
		
		
		steps.each(function(index){
			
			var st = $(this);
			var mdl = (st.outerHeight(true) / 2) + st.offset().top;
			
			if((mdl > pos && mdl < (pos + $(window).height())) && ($('body').eq(0).data('lastpos') < pos)) {
				lastsbs = $(this);
			}
			
		})
		
		
		
		
		
		if(steps.size() && $('body').eq(0).hasClass('window-width-lg')) {
			$(
				function() {
					/*
					var n;
					
					
					if(lastsbs.offset().top + 120 < pos) { //
						n = lastsbs.next('.stepbystep').eq(0);
						if(n.size() && n.data('steping')) {
							
							n.data('steping', false);
							$('html, body').animate(
								{
									scrollTop: (n.offset().top + 0)
								},
								900,
								function(){
									lastsbs = n;
									n.data('steping', true);
								}
								);
							
						}
					} else if(lastsbs.offset().top - 120 > pos) {//
						n = lastsbs.prev('.stepbystep').eq(0);
						if(n.size() && n.data('steping')) {
							
							n.data('steping', false);
							$('html, body').animate(
								{
									scrollTop: (n.offset().top + 0)
								},
								900,
								function(){
									lastsbs = n;
									n.data('steping', true);
								}
								);
							
						}
					} else {
						
					}
					*/
					
					//console.log('dfsdfsdfs');
					
					if((lastsbs.outerHeight(true) + lastsbs.offset().top) < (pos + $(window).height())) {
						var n = lastsbs.next('.stepbystep').eq(0);
						if(n.size() && n.data('steping')) {
							n.data('steping', false);
							$('html, body').animate(
								{
									scrollTop: (n.offset().top + 0)
								},
								900,
								function(){
									lastsbs = n;
									n.data('steping', true);
								}
								);
						}
					}
					
				}
			);
		}
		
		
		
		$('body').eq(0).data('lastpos', pos);
		//return false;
		
	}).trigger('scroll');
	
	
	
	
	
	$('body').on('changeClass',function(){
	
	});
	
	
	
	
});
