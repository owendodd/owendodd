$('.menu-icon').click(function () {
  $(".menu-item").fadeToggle().css('display', 'flex');
  $(".bar").toggleClass('x');
});