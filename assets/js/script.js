$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
    $(".collapser").slideUp(300);
  } else {
    $(".collapser").slideDown(300);
  }
});

$('header').click(function () {
  $(".collapser").slideToggle();
});

$('header a').click(function(e) {
  e.stopPropagation();
  // ('a').trigger("click");
  console.log('test');
});
