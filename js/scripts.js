$(document).ready(function() {
  var languages = $('.fade-header');
  var index = -1;

  showNext();

  $(window).scroll(function(){
    scrollRange();
  });

  function showNext() {
      ++index;
      languages.eq(index % languages.length)
          .fadeIn(1250)
          .delay(1250)
          .fadeOut(1250, showNext);
  }

  function scrollRange() {
    var pixToShowNav = 100;

    if($(window).scrollTop() >= pixToShowNav){
      $('.banner-bar').addClass('fixed');
    } else {
      $('.banner-bar').removeClass('fixed');
    }
  }
});