$(function () {
  var slider       = $('.slider'),
      first_slides = slider.children('.slide:first'),
      total_slides = $('.slider.slide').length;

  first_slides.addClass('show');
  $('.indicator').html('1/' + total_slides);
});


$('.next').click(function () {
  var total_slides = $('.slider.active>.slide').length,
    current_slide = $('.slider.active>.slide.show'),
    current_position = $(current_slide).index() + 1,

    first_slide = $('.slider.active>.slide').first(),
    slide_plus = $(current_slide).next(),

    next_slide = current_position == total_slides ? first_slide : slide_plus;

  current_slide.removeClass('show');
  next_slide.addClass('show');

})

$('.prev').click(function () {
  var total_slides = $('.slider.active>.slide').length,
    current_slide = $('.slider.active>.slide.show'),
    current_position = $(current_slide).index() + 1,

    last_slide = $('.slider.active>.slide').last(),
    slide_minus = $(current_slide).prev(),

    prev_slide = current_position == 1 ? last_slide : slide_minus;

  current_slide.removeClass('show');
  prev_slide.addClass('show');

})


$(document).ready(function() {
  $(".collapser").slideUp(300);
});

$('header').click(function () {
  $(".collapser").slideToggle();
  console.log('test');
});

$('header a').click(function(e) {
  e.stopPropagation();
  // ('a').trigger("click");
  console.log('test');
});
