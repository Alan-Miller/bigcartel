$(document).ready(function() {

  const nav = $(".home__nav");
  let scrollPosition = $(window).scrollTop();

  // setTimeout( _ => {
  //   scrollPosition = $(window).scrollTop();
  //   console.log('pos', scrollPosition)
  // }, 200);
  
  $(window).on('scroll', function() {
    console.log('pos', scrollPosition)

    if ($(window).scrollTop() > scrollPosition) {
      console.log('hide')
      nav.addClass('hidden');
    }
    else nav.removeClass('hidden');

    scrollPosition = $(window).scrollTop();
  });
  
});