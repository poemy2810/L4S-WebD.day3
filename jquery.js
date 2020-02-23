$(document).ready(function(){
  $('.fuwat').css('visibility','hidden');
  $(window).scroll(function(){
   var windowHeight = $(window).height(),
       topWindow = $(window).scrollTop();
   $('.fuwat').each(function(){
    var objectPosition = $(this).offset().top;
    if(topWindow > objectPosition - windowHeight + 200){
     $(this).addClass("fuwatAnime");
    }
   });
  });
});


$('.slider').slick({
    dots:true,
    slidesToShow:4,
    fade:false,
    slidesToScroll:1
});

$('.main-visual').bgSwitcher({
   images:['images/hero.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'], 
　 interval: 6000,
　 loop:true,
　 shuffle:true,
　 effect:"fade", // fade,blind,clip,slide,drop,hide
　 duration:800,
　 easing:"swing" // linear,swing
   });