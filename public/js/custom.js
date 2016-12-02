$(document).ready(function(){
	removeElementClassResponsivo(".list-tec-dt","list-tec-dt");
      removeElementClassResponsivo("");
	carousel();
      setSetaPosition();
      resizeForIpadMini();

        $("#gestao_menu").hide();
         $("#vendas_menu").hide();


      $(window).on('scroll',function(){
            if($( window ).scrollTop()>$('#tec').scrollTop()+500){
                 $('.menuVoador').show(600);
                  $("#gestao_menu").hide();
                  $("#vendas_menu").hide();

            } else {
                  $('.menuVoador').hide(600);

            }
      });

       OpenOptios();
});


function removeElementClassResponsivo(elemento,classe){

	if( $(window).width() <= 767 )
	{
		$(elemento).removeClass(classe);
		$('img').removeClass('img-carousel');
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
            $('#line').css('left',offset.left-140);
      });


      semestral.on("click",function(){
            var p = $( "#semestral" );
            var offset = p.offset();
            // $('#line').css('left',offset.left-600);

            $("#line").fadeIn("slow");
              $('#line').css('left',offset.left-140);
      });


      anual.on("click",function(){
            var p = $( "#anual" );
            var offset = p.offset();
            $('#line').css('left',offset.left-140);
      });
}





function resizeForIpadMini(){
    var vwidth = $(window).width();
    var col1 = $("#resposive-resize1");
    var col2 = $("#resposive-resize2");

    if(vwidth == 768){
        col1.removeClass("col-sm-4");
        col2.removeClass("col-sm-8");
        col2.addClass("col-sm-12");
    }
}


function scroll(){
          $('.ancora').click(function() {

        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $( href ).offset().top -110
        }, 500);

        return false;
    });
}

function OpenOptios() {

      $("#gestao").on("click",function(){
          $("#gestao_menu").show(600);
          $("#gestao_menu ul").show(600);

          $("#vendas_menu").hide(300);

      });



      $("#vendas").on("click",function(){
        $("#gestao_menu").hide(300);
          $("#vendas_menu").show(600);
          $("#vendas_menu ul").show(600);
      });



}
