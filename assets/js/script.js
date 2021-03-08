$('.menu-icon').click(function () {
  $(".menu-item").toggleClass('show');
  $(".bar").toggleClass('x');
});

// $('header').mouseleave(function () {
//   setTimeout(function() {
//   $(".menu-item").removeClass('show');
//   $(".bar").removeClass('x');
//   }, 400);
// });