$(document).ready(function() {

  const nav = $(".home__nav");
  let windowScroll = $(window).scrollTop();
  
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > windowScroll) nav.addClass('hidden');
    else nav.removeClass('hidden');
    windowScroll = $(window).scrollTop();
  });
  
});