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

$('li').click(function () {
  var active_slider = $('.slider.active'),
    target = $(this).data('target');

  active_slider.removeClass('active');
  $(target).addClass('active');

});

$('.hider').click(function () {
  var text = $('.hider').text();

  $('header').toggle();
  $('.hider').text(text == "Hide info" ? "Show info" : "Hide info")
});