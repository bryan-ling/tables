$(document).ready(function(){
    $(".ShowAnswersButton").click(function(){
        $(".answers").toggleClass("answersall");
		$(".ShowAnswersButton").toggleClass("ShowAllAnswersButtonClick");
    });
	$(".ShowQuestionsButton").click(function(){
        $(".questions").toggleClass("questionsall");
		$(".ShowQuestionsButton").toggleClass("ShowAllQuestionsButtonClick");
    });
	
	
	
	$(".UnitSelect").click(function(){

		$(this).toggleClass("UnitOneUnselect");
    });
	
	$("#UnitOne").click(function(){

		$(".UnitOne").toggleClass("HideUnit");
    });
	
	$("#UnitTwo").click(function(){

		$(".UnitTwo").toggleClass("HideUnit");
    });
	$("#UnitThree").click(function(){

		$(".UnitThree").toggleClass("HideUnit");
    });
	$("#UnitFour").click(function(){

		$(".UnitFour").toggleClass("HideUnit");
    });
	$("#UnitFive").click(function(){

		$(".UnitFive").toggleClass("HideUnit");
    });
	$("#UnitSix").click(function(){

		$(".UnitSix").toggleClass("HideUnit");
    });
});
