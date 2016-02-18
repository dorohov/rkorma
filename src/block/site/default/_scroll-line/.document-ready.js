
	$('.scroll-line').each(function(index){
		
		var block = $(this);
		var target = $(block.attr('data-target'));
		
		block.attr('data-ratio', $(target).outerHeight(true) * 1.3 / block.height());
		
		block.find('.scroll').draggable({
			axis:'y',
			containment:'.scroll-line',
			scroll:false,
			drag:function(event, ui){
				//scrollLM(ui.position.top, ratio);
				//$(target).css({'margin-top' : -ui.position.top})
				
				target.scrollTop(ui.position.top * block.attr('data-ratio'));
			},
		});
		
	});
	