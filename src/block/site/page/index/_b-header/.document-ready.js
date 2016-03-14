	
	$('.index__header ._ih__scroll-next').on('click', function(event){
		event.preventDefault();
		
		$.fn.fullpage.moveSectionDown();
	})
	