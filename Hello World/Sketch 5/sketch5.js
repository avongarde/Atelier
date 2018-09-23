// references Directional Lights example
// https://p5js.org/examples/lights-directional.html

// read up on WebGL here
// https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5

var radius = 200;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw(){
	noStroke();
	background(0);
	var dirY = (mouseY / height - 1) * 5;
	var dirX = (mouseX / width - 1) * 5;
	directionalLight(250, 250, 250, dirX, dirY, 1);
	ambientMaterial(250);
	translate(-1.5 * radius, 0, 0);
	rotateX(millis() / 1000);
	cone(radius);
	translate(3 * radius, 0, 0);
	rotateX(millis() / 2000);
	cone(radius);
}

