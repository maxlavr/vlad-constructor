$(document).ready(function(){
  if($(window).width() > 680){
  	$('.back-slider').slick({
	  dots: false,
	  infinite: true,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  speed: 500,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  arrows: true
	});
  }
  else if($(window).width() <= 680){
	// alert('hello')
	$('.back-slider').slick({
	  dots: true,
	  infinite: true,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  speed: 500,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  arrows: false,
	});
  }
  
});