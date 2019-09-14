$(document).ready(function(){
	
	var x = 0;

    function height_match(target){
		var big_height = 0;

		$(target).each(function(){
			if(big_height < $(this).height()){
				big_height = $(this).height();
			}
		})		

		$(target).height(big_height);
	}
	
	height_match('.block-services');
	

	$( ".click-dropdawn" ).click(function() {

		if(x == 0) {
			x = 1;			
			$( ".my-dropdown-menu" ).fadeIn();
		} else {
			$( '.my-dropdown-menu' ).fadeOut();
			x = 0;
		}
	});

	if( x == 0) {
		$( "#superfish-1 .sf-item-6" ).hover(
			function() {
				$( '.my-dropdown-menu' ).fadeIn();
			}, function() {
				$( '.my-dropdown-menu' ).fadeOut();
			}
		)
	}

	
	$(".lightgallery").lightGallery();
    
	

});