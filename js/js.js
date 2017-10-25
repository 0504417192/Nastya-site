$(function (){


	  $("#dropdown").on('click', function(){
        $(this).find(".down").slideToggle("slow")   
             });
		
/*end menu-dropdown*/

	$(document).ready(function(){
		$('.menu-trigger').on('click', function(){
			$("#slide").slideToggle()
		});//end slide toggle

		$(window).resize(function(){
			if ( $(window).width() > 910 ) {
				$('nav ul').removeAttr('style');
			}

		});//end resize

	});


/*end nav-menu @media*/

	$('.hand-massage').mouseenter(function(){
		$('#hand').css('background', 'none')
		
	});
	$('.hand-massage').mouseout(function(){
		$('#hand').css('background', 'linear-gradient(to right, rgba(255, 255, 255, 0.45) 0%,rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 0%)')	
	});
		$('.apparate-massage').mouseenter(function(){
		$('#apparate').css('background', 'none')

	});
	$('.apparate-massage').mouseout(function(){
		$('#apparate').css('background', 'linear-gradient(to right, rgba(255, 255, 255, 0.45) 0%,rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 0%)')	
	});


	/*end picture-cover*/

    $('a').click (function () {
        // event.preventDefault();
        var id  =$(this).attr('href');
        var	top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    /*end  csrolltop*/

 
 

    



});


	