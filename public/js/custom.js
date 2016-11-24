$(document).ready(function(){
	removeElementClassResponsivo(".list-tec-dt","list-tec-dt");
      removeElementClassResponsivo("");
	carousel();
      setSetaPosition();
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


function setSetaPosition (){
      var mensal = $("#mensal");
      var semestral = $("#semestral");
      var anual = $("#anual");

      mensal.on("click",function(){
            var p = $( "#mensal" );
            var offset = p.offset();
            $('#line').css('left',offset.left-600);
      });


      semestral.on("click",function(){
            var p = $( "#semestral" );
            var offset = p.offset();
            // $('#line').css('left',offset.left-600);

            $("#line").fadeIn("slow");
              $('#line').css('left',offset.left-600);
      });


      anual.on("click",function(){
            var p = $( "#anual" );
            var offset = p.offset();
            $('#line').css('left',offset.left-600);
      });
}