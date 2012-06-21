$(document).ready(function(){
	
  $("p").hover(function(){
    $(this).css("background-color","yellow");
    },function(){
    $(this).css("background-color","#E9E9E4");
  });

    $("#square").hover(function(){
    $(this).css("background-color","blue");
    },function(){
    $(this).css("background-color","green");
  });
});



