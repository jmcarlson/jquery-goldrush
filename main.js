$(document).on('ready', function() {
  	
	var tac = '<div class="gold"></div>';

	$(document).on('click', 'img', function(e) {
		console.log("Adding " + e.clientX + ", " + e.pageY);
		$('.container').append(tac);
		$('.gold:last').offset({ top: e.pageY, left: e.pageX});
	})

	$(document).on('click', '.gold', function(e) {
		console.log("Remove " + $(this).attr('style'));
		$(this).remove();
	})

	$(document).on('hover', '.gold', function(e) {
		// $(this div).
		console.log("Hover " + $(this).offset());
	})

});