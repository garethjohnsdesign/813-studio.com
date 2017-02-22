$(document).foundation();


/*
	var colours = [
		'#548AEA',
		'#FF8F7B',
		'#CAE3FC',
		'#315E47',
		'#F8B494',
		'#B5D536',
		'#EDDA46',
		'#94877E',
		'#FBDBEB',
		'#912F65'
	];

	var colourIndex = 0;

	
		$('a').mouseenter(function(){
			colourIndex = colourIndex === 9 ? 0 : colourIndex + 1;
			$('body').css({background:colours[colourIndex]}).addClass('dark');
		}).mouseleave(function(){
			$('body').removeClass('dark').css({background:'#fff'});
		}).click(function(){
			$(this).addClass('strike');
		});
*/
	
		
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