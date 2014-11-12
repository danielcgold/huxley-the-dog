$(window).scroll(function(){
  if($(window).scrollTop() >= $('.what-is-this').offset().top){
    $('.banner-bar').addClass('fixed');
  } else {
    $('.banner-bar').removeClass('fixed');
  }
});

$(document).ready(function() {
  var languages = $('.fade-header');
  var index = -1;

  function showNext() {
      ++index;
      languages.eq(index % languages.length)
          .fadeIn(1250)
          .delay(1250)
          .fadeOut(1250, showNext);
  }

  showNext();
});