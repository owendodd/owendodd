// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();

//   if (scroll >= 10) {
//     $(".collapser").slideUp(300);
//   } else {
//     $(".collapser").slideDown(300);
//   }
// });

$('.menu-icon').click(function () {
  $(".dropdown").slideToggle();
  $(".bar").toggleClass('x');
});

$('header').mouseleave(function () {
  $(".dropdown").slideUp();
  $(".bar").toggleClass('x');
});