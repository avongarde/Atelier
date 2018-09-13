var x = random(width);
var y = random(height);

function setup(){
    createCanvas(720, 480);
}

function draw() {
	//background(100, 20, 255);
    noStroke();

	colorMode(HSB, 100);
	for (var i = 0; i < 100; i++) {
    	for (var j = 0; j < 100; j++) {
    		stroke(i, j, 100);
    		point(i, j);
  		}
    }
}