
	$('._sb__nav-content').each(function(index){
		
		var block = $(this);
		
		block.find('ul._sb__nav-dropdown li a').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			btn.closest('ul._sb__nav-dropdown').find('li').removeClass('active');
			btn.closest('li').addClass('active');
			
			var href = btn.attr('href');
			var content = $('._sb__scroll ' + href);
			var cont = content.closest('._sb__scroll');
			var pos = content.position().top;
			cont.animate({scrollTop : pos + 'px'}, 400);
			
			//pos = content.position().top;
			var sl = $('.scroll-line[data-target="#' + cont.attr('id') + '"]');
			sl.find('.scroll').animate({top : (pos * 100 / cont.outerHeight(true) ) + '%'}, 400);//(pos) / sl.attr('data-ratio')
			//console.log( (pos) / sl.attr('data-ratio'));
			
		});
		
	});
	