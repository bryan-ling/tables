$(document).ready(function(){   
  
  
$(".highlight").click(function(){
	
   $(".questions, .answers").hover(function(){
       $(this).toggleClass("black");
         
   });
  
   $(".questions, .answers").click(function(){
        $(this).toggleClass("blacker");
    });
	
	
       $(this).toggleClass("highlighter");

  });
  


    

  
});