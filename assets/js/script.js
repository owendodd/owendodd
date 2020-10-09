$(function () {
  var slider       = $('.slider'),
      first_slides = slider.children('.slide:first'),
      total_slides = $('.slider.slide').length;

  first_slides.addClass('show');
  $('.indicator').html('1/' + total_slides);
});


$('.next').click(function () {
  var slider = $(this).closest('.slider').children('.slider'),
    current_slide = slider.children('.slide.show'),
    total_slides = slider.children('.slide').length,
    should_loop = current_slide.next().length > 0,
    next_slide = should_loop ? current_slide.next() : slider.children('.slide:first');

  current_slide.removeClass('show');
  next_slide.addClass('show');

  $('.indicator').html((next_slide.index() + 1) + ' / ' + total_slides);
});


$('.prev').click(function () {
  var slider = $(this).closest('.slider'),
    current_slide = slider.children('.slide.show'),
    total_slides = slider.children('.slide').length,
    should_loop = current_slide.prev().length > 0,
    prev_slide = should_loop ? current_slide.prev() : slider.children('.slide:last');

  current_slide.removeClass('show');
  prev_slide.addClass('show');

  $('.indicator').html((prev_slide.index() + 1) + ' / ' + total_slides);

});



$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
    $("h1.contact").slideUp();
  } else {
    $("h1.contact").slideDown();
  }
});

$('header').delay("slow").hover(function () {
  $("h1.contact").slideToggle();


});
