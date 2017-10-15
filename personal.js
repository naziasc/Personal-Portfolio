$(document).ready(function () {

  var menu = $('.navbar');
  var origOffsetY = menu.offset().top;

  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('.navbar').addClass('sticky');
      $('.about-us').addClass('menu-padding');
    } else {
      $('.navbar').removeClass('sticky');
      $('.about-us').removeClass('menu-padding');
    }


  }

  document.onscroll = scroll;

});
