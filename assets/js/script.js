$('.menu-icon').click(function () {
  $(".menu-item").fadeToggle().css('display', 'flex');
  $(".bar").toggleClass('x');
});

$('.link-icon').click(function () {
  $(".link-item").fadeToggle().css('display', 'flex');
})