$(document).foundation();

		
$('a').mouseenter(function(){
	$('body').addClass('light');
}).mouseleave(function(){
	$('body').removeClass('light');
});

$('a').click(function(){
	$('body').addClass('light');
}).mouseleave(function(){
	$('body').removeClass('light');
});