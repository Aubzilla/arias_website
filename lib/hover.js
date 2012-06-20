/*$(document).ready(function(){
  $('#square_4').hover(function(){$(this).addClass(.red_square);}, function(){$(this).removeClass(.red_square);});
});*/

/*
$(document).ready(function(){
  $('#square_4').mouseover(function(){
	  $(this).addClass('red_square');
  });
    $('#square_4').mouseout(function(){
	  $(this).removeClass('red_square');
  });
}); */

/* This code below worked as expected
$(document).ready(function(){
  $('#square_4').addClass('blue_square');
});
*/

/*Didn't work
$(document).ready(function(){
  $('#celebs tbody tr').mouseover(function(){
    $(this).addClass('zebraHover');
  });
  $('#celebs tbody tr').mouseout(function(){
    $(this).removeClass('zebraHover');
  });
});
*/

$(document).ready(function(){
      $("p").hover(function(){
            $(this).css("background-color","red");
		}, function(){
            $(this).css("background-color","none");
      });
});

/* this one below did work, I stole it from the following url.
http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_change_p
*/

$(document).ready(function(){
  $("button").click(function(){
    $("div").css("background-color","red");
  });
});


