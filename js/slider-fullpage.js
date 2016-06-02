var ShowAlert = function(title, text, cb) {
	$('body').jqfeInfoMsg({html:text,showtime:3000});
};

$(document).ready(function() {
	
	var slider = $('.slider-fullpage');
	
	if(slider.size()) {
		
		slider.data('scrolling', false);
		var slides = slider.find('.slider-item');
		var lastScrollTop = 0;
		
		var slider_t = slider.offset().top;
		
		var offset_t = [];
		for(var i=0;i<=2;i++) {
			offset_t[i] = slides.eq(i).offset().top;
		}
		
		var bol = slides.eq(0).find('.img-bolus');
		slides.eq(1).find('.img-bolus').hide();
		slides.eq(2).find('.img-bolus').hide();
		
		function scr_item(el, f_el) {
			if(slider.data('scrolling') == false) {
				slider.data('scrolling', true);
				$('html, body').animate(
					{
						scrollTop: (el.offset().top)
					},
					'normal',
					'linear',
					function(){
						slider.data('scrolling', false);
					}
				);
				//var bol_el = el.find('.img-bolus');
				//bol_el.animate({'top':'50%'}, 'normal');
				//var bol_f_el = f_el.find('.img-bolus');
				//bol_el.animate({'top':'0%'}, 'normal');
			}
		}
		
		slides.eq(0).on('scrolling.down.fecss', function(event){
			scr_item(slides.eq(1), slides.eq(0));
			bol.css({'position' : 'fixed'});
		});
		slides.eq(1).on('scrolling.down.fecss', function(event){
			scr_item(slides.eq(2), slides.eq(1));
		});
		slides.eq(2).on('scrolling.down.fecss', function(event){
			bol.css({'position' : 'absolute'});
		});
		slides.eq(2).on('scrolling.up.fecss', function(event){
			scr_item(slides.eq(1), slides.eq(2));
		});
		slides.eq(1).on('scrolling.up.fecss', function(event){
			scr_item(slides.eq(0), slides.eq(1));
		});
		slides.eq(0).on('scrolling.up.fecss', function(event){
			bol.css({'position' : 'absolute'});
		});
		
		$(window).on('scroll',function(event){
			event.preventDefault();
			
			var scr_t = $(document).scrollTop();
			var down = 0;
			
			if (scr_t > lastScrollTop){
				down = 1;
			} else if(scr_t < lastScrollTop) {
				down = -1;
			} else {
				down = 0;
			}
			
			if(scr_t > (offset_t[0] - 1) && scr_t < offset_t[2]) {
				
				if(scr_t > (offset_t[0]) && scr_t < offset_t[1]) {
					
					//slides.eq(1).jqfeScrollTo({speed:400,diff:0});
					if(down == 1) {
						slides.eq(0).trigger('scrolling.down.fecss');
					} else if(down == -1) {
						slides.eq(1).trigger('scrolling.up.fecss');
					} else {
						/*
						$('html, body').animate({
					scrollTop: (el.offset().top + options.diff)
					}, options.speed);
						*/
					}
					
					
				} else
				
				if(scr_t > (offset_t[1]) && scr_t < offset_t[2]) {
					
					if(down == 1) {
						slides.eq(1).trigger('scrolling.down.fecss');
					} else if(down == -1) {
						slides.eq(2).trigger('scrolling.up.fecss');
					} else {
						
					}
					
				} else
				
				if(scr_t > (offset_t[2] - 1)) {
					
					if(down == 1) {
						slides.eq(2).trigger('scrolling.down.fecss');
					} else if(down == -1) {
						
					} else {
						
					}
					
				}
			
			} else if(scr_t > (offset_t[2] -1)) {
				
				bol.css({
					'position' : 'fixed',
					'margin-top' : (offset_t[2] - scr_t) + 'px',
				});
				
			} else {
				
				bol.css({'position' : 'absolute'});

			}
			
			lastScrollTop = scr_t;
			
			return false;
			
		});
		
	}
	
	$('#send-submit').closest('form').on('submit', function(event){
		event.preventDefault();
		
		var res = 0;
		var res_txt = '';
		
		var name = $('#send-name').val();
		var email = $('#send-email').val();
		var msg = $('#send-msg').val();
		var preview = $('#send-preview').val();
		
		if(name != '') {
			res++;
		} else {
			res_txt = 'Введите Ваше имя. Пустое значение не принимается';
		}
		
		var re1 = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
		//var re2 = /^\d[\d\(\)\ -\+]{4,14}\d$/;
		if(email != '' || (re1.test(email))) {//email.indexOf('@') > 0 || || re2.test(email)
			res++;
		} else {
			res_txt = 'Введите корректный email или телефон';
		}
		
		if(res == 2) {
			$.post('/send.php',{
				'name':name,
				'email':email,
				'msg':msg,
				'__preview':preview,
			},function(data){
				//alert(data);
				
				ShowAlert('', data, function(event){
					event.preventDefault();
					
				});
				
				$('#send-name').val('');
				$('#send-email').val('');
				$('#send-msg').val('');
			});
		} else {
			
			ShowAlert('', res_txt, function(event){
				event.preventDefault();
				
			});
			
		}
		
	});
	
	$('.calcite-review-block ._c-btn__top').on('click', function(event){
		event.preventDefault();
			
			slider.data('scrolling', true);
			$('html, body').animate(
				{
					scrollTop: ($('.navbar.navbar-default').offset().top)
				},
				'normal',
				function(){
					slider.data('scrolling', false);
				}
			);
		
	});
	
	$('.g-t-block').on('click', function(event){
		event.preventDefault();
		
		var btn = $(this);
		var href = btn.attr('href');
		
		slider.data('scrolling', true);
		$('html, body').animate(
				{
					scrollTop: ($(href).offset().top)
				},
				'normal',
				function(){
					slider.data('scrolling', false);
				}
			);
		
	});

});