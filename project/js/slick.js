$(document).ready(function(){
  

 
  if($(window).width() > 680){
    $('.slider-ss').slick({
        dots: false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: true,
        centerMode: true
    });
  }
  else if($(window).width() <= 680){
    // alert('hello')
    $('.slider-ss').slick({
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