// stolen from example
// https://p5js.org/reference/#/p5.FFT

var waveform;

function preload(){
  sound = loadSound('sound.mp3');
}

function setup(){
  var cnv = createCanvas(720, 480);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(0);

  var spectrum = fft.analyze();
  noStroke();
  fill(255,255,0); // spectrum is green
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,255,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    //var x = map(i, 0, waveform.length, 0, width);
    //var y = map( waveform[i], -1, 1, 0, height);
    vertex(i, waveform[i] * height + height/2);
  }
  endShape();

  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}