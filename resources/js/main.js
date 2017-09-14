$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false
  });

  var lastScrollTop = 0;

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    console.log("ScrollTop:" + scrollTop);
    console.log("Last scroll:" + lastScrollTop);
    console.log("NavBar Top:" + ($('.navbar').css('top')));

    if (scrollTop - lastScrollTop >= 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
    }
  });
});
