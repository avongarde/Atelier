// references video input example
// https://p5js.org/examples/dom-video-capture.html
var capture;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  capture = createCapture(VIDEO);
  capture.size(480, 320);
  capture.hide();
}

function draw() {
  background(255);
  push();
  image(capture, 0, 0);
  filter('INVERT');
  pop();
  image(capture, width/3, 0);
  // filter('OPAQUE');
  image(capture, width/3 * 2, 0);
  // filter('POSTERIZE');
  image(capture, 0, height/2);
  // filter('GRAY');
  image(capture, width/3, height/2);
  // filter('ERODE');
  image(capture, width/3 * 2, height/2);
  filter('DILATE');
}