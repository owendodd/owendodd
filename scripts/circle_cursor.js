/*
    jQuery Circle Cursor

    Copyright (c) 2017 Michał Marchewczyk

    Licensed under the MIT license
*/

console.log("Circle Cursor jQuery plugin loaded");
(function ( $ ) {
    $.fn.circursor = function( options ) {

        var options = $.extend({
            size1: "0",
            size2: "40px",
            width: "5px",
            color: "yellow",
            duration: "2000",
            easing: "ease"
        }, options );

      return this.each(function() {
        var container = $(this);
          $(this).find('*').filter(function () { return $(this).css('cursor') == "pointer" }).addClass("circle_pointer");
          $(this).find('*').filter(function () { return $(this).css('cursor') !== 'auto'}).css("cursor", "none");
          $(this).css("cursor", "none");
          $(this).append("<div id='circle_cursor' style='position: fixed; z-index: 1000; pointer-events:none; overflow: visible;'><div style='position: absolute; top: 0px; left: 0px; transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); border-radius: 1000px; width: " + options.size1 + "; height: " + options.size1 + "; background-color: rgba(0,0,0,0); border-style: solid; border-width: " + options.width + "; border-color: " + options.color + ";'></div></div>");
          $(this).mousemove(function (event) {
            $(this).find("#circle_cursor").css('left', event.clientX).css('top', event.clientY);
           });
          $(this).on('mouseover', '.circle_pointer', function(event){
            container.find("#circle_cursor").children().stop().animate({width: options.size2, height: options.size2}, {duration: options.duration, easing: options.easing});
          }).on('mouseout', '.circle_pointer', function(event){
            container.find("#circle_cursor").children().stop().animate({width: options.size1, height: options.size1}, {duration: options.duration, easing: options.easing});
          });
      });

    };


}( jQuery ));
