$(document).ready(function(){
 if($(window).width() > 980){
     $('.offers-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        speed: 600,
        infinite:true,
        arrows: true,
    });
 }
 else if($(window).width() <= 980 && $(window).width() > 680){
    $('.offers-slider').slick({
        slidesToShow:2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        speed: 600,
        arrows: false,
        infinite:true,
        dots: true,
    });
 }
 else if($(window).width() <= 680){
    $('.offers-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 600,
        arrows: false,
        infinite:true,
        dots:true,
    });
 }

 
});