
	$('._sb__nav-content').each(function(index){
		
		var block = $(this);
		
		$('._sb__scroll ._sb__page-content').each(function(index){
			
			var el = $(this);
			el.attr('data-position-top', el.position().top);
			
		});
		
		block.find('ul._sb__nav-dropdown li a').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			btn.closest('ul._sb__nav-dropdown').find('li').removeClass('active');
			btn.closest('li').addClass('active');
			
			var href = btn.attr('href');
			var content = $('._sb__scroll ' + href);
			var cont = content.closest('._sb__scroll');
			var pos = parseInt(content.attr('data-position-top'));//content.position().top;
			
			var bigimg = btn.attr('data-decor-img');
			$('#post-decor-img').css({'background-image': 'url(' + bigimg + ')', 'background-size': 'cover'});
			
			cont.animate({scrollTop : pos + 'px'}, 400);
			
			//pos = content.position().top;
			//var sl = $('.scroll-line[data-target="#' + cont.attr('id') + '"]');
			//sl.find('.scroll').animate({top : (pos * 100 / cont.outerHeight(true) ) + '%'}, 400);//(pos) / sl.attr('data-ratio')
			//console.log( (pos) / sl.attr('data-ratio'));
			
		});
		
		$('._sb__scroll').on('scroll', function(event){
			var pos = 0;
			pos = $('._sb__scroll').scrollTop();
			
			var to_active;
			
			$('._sb__scroll').find('._sb__page-content').each(function(index){
				
				var el = $(this);
				var _pos = el.attr('data-position-top');
				
				if(pos > _pos - 1) {
					to_active = el;
				}
				
			});
			
			if(to_active) {
				var _id = to_active.attr('id');
				
				if(_id) {
					var btn = block.find('ul._sb__nav-dropdown li a[href="#' + _id + '"]');
					btn.closest('ul._sb__nav-dropdown').find('li').removeClass('active');
					btn.closest('li').addClass('active');
				}
			}
		});
		
	});
	