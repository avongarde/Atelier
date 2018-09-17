// references mic input example & pointillism example
// https://p5js.org/examples/image-pointillism.html by Dan Shiffman
// https://p5js.org/examples/sound-mic-input.html

var mic;
var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("image.jpg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();

  mic = new p5.AudioIn();
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  
  var pointillize = map(vol, 0, 1, smallPoint, largePoint);
  console.log(pointillize);

  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
