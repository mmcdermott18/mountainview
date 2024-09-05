$(document).ready(function() {
    // run function on initial page load
    gallery();
    nav();
    
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function gallery() {
  $('.images').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000
    });
}
function nav() {
  $('#open').click(function(){
    $('#open').addClass('hidden');
    $('#close').removeClass('hidden');
    $('#mobile-nav').removeClass('hidden');
    $('body').addClass('scroll-lock');
    $('#close').click(function(){
      $('#open').removeClass('hidden');
      $('#close').addClass('hidden');
      $('#mobile-nav').addClass('hidden');
      $('body').removeClass('scroll-lock');
    });
  });
}
