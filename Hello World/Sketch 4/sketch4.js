// references sketch 3 & Pan Sound example
// https://p5js.org/examples/sound-pan-sound.html

var sound;
var circles = [];

function preload(){
  sound = loadSound('sound.mp3');
  console.log(sound);
}

function setup(){
  var cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.mouseClicked(togglePlay);
  console.log(togglePlay);
  sound.amp(0.2);
}

function draw(){
  background(0);
  for (var i = 0; i < circles.length; i++){
    noStroke();
    circles[i].lifespan += 0.1;
    circles[i].alpha -= circles[i].lifespan;
    fill(circles[i].r, circles[i].g, circles[i].b, circles[i].alpha);
    ellipse(circles[i].x, circles[i].y, 10, 10);
    circles[i].y += circles[i].ySpeed;
    circles[i].x += circles[i].xSpeed;
    circles[i].ySpeed += 0.1;
  }
}

function mouseMoved(){
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var panning = map(mouseX, 0., width, -1.0, 1.0);
  
  sound.pan(panning);
  // sound.play();

  for(var i = 0; i < 50; i++){
    var particle = {
      x: mouseX,
      y: mouseY,
      xSpeed: random(-3, 3),
      ySpeed: random(-3, 3),
      lifespan: 0,
      alpha: 100,
      r: r,
      g: g,
      b: b
    }
  circles.push(particle);
  }
  return false;
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}