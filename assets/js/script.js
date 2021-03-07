// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();

//   if (scroll >= 10) {
//     $(".collapser").slideUp(300);
//   } else {
//     $(".collapser").slideDown(300);
//   }
// });

$('.nameplate, .menu-icon').click(function () {
  $(".dropdown").slideDown();
});

$('header').mouseleave(function () {
  $(".dropdown").slideUp();
});