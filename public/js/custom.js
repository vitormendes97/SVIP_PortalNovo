$(document).ready(function(){
	removeElementClassResponsivo(".list-tec-dt","list-tec-dt");
	carousel();
});


function removeElementClassResponsivo(elemento,classe){

	if( $(window).width() <= 767 )
	{
		$(elemento).removeClass(classe);
	}
		
}

function carousel() {
	  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
}