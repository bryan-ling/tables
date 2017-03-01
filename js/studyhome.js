$(document).ready(function(){
	$(".SubjectBox").hover(function(){
		$(this).find('#Sciencergba').stop().slideToggle(200);
		$(this).find('#Accountingrgba').stop().slideToggle(200);
		$(this).find('#Englishrgba').stop().slideToggle(200);
		$(this).find('#Historyrgba').stop().slideToggle(200);
		$(this).find('#Mathrgba').stop().slideToggle(200);
		$(this).find('#Spanishrgba').stop().slideToggle(200);
		
		$(this).find('#Science').stop().slideToggle(200);
		$(this).find('#Accounting').stop().slideToggle(200);
		$(this).find('#English').stop().slideToggle(200);
		$(this).find('#History').stop().slideToggle(200);
		$(this).find('#Math').stop().slideToggle(200);
		$(this).find('#Spanish').stop().slideToggle(200);
		

	});
});