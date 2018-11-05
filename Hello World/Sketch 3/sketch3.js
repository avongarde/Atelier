var circles = [];

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
	background(0, 0, 0, 100);
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

function mouseClicked(){
	var r = random(255);
	var g = random(255);
	var b = random(255);

	for(var i = 0; i < 50; i++){
		var particle = {
			x: mouseX,
			y: mouseY,
			xSpeed: random(-3, 3),
			ySpeed: random(-3, 3),
			lifespan: 0,
			alpha: 255,
			r: r,
			g: g,
			b: b
		}
	circles.push(particle);
	}
}
