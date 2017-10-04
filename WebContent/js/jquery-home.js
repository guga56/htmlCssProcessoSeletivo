$(function(){

	$('#home').mouseover(function(){
		$(this).removeClass('.home').addClass('.homesobre');
	});

	$('#home').mouseout(function(){
		$(this).removeClass('.homesobre').addClass('.home');
	});
});