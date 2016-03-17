	
	/*
	$('.history-back').on('click', function(event){
		event.preventDefault();
		
		window.history.back();
	});
	*/
	
	$(document.body).on('click.fecss.history-back', '.history-back', function(event){
		event.preventDefault();
		
		window.history.back();
	});
	