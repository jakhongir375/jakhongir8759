$('.box').slick({
  infinite: true,
  speed: 100,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
});



$('.box2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.box3'
});
$('.box3').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.box2',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});