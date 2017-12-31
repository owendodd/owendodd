paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');

  var tool = new Tool();
  var path;
  tool.fixedDistance = 60;

  tool.onMouseMove = function(event) {
    path = new Path();
    path.strokeColor = 'red';
    path.add(event.point);
  }

  tool.onMouseMove = function(event) {
    var radius = event.delta.length / 2;
    var centerMove = event.middlePoint * Math.random();
    var circle = new Path.Circle(event.middlePoint, radius);
    circle.strokeColor = 'red';
    circle.fillColor = 'white';
    // circle.shadowcolor = 'red';
    // cicrle.shadowBlur = 12;
  }



}
