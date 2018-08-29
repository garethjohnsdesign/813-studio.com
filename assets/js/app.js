$(document).on('turbolinks:load', function() {

$(document).foundation();

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

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

});