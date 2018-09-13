var mouseClick = [];

function setup(){
    createCanvas(720, 480);
}

function draw(){
	for(var i = 0; i < mouseClick.length; i++){
   		ellipse(mouseClick[i].x, mouseClick[i].y, 10);
   		mouseClick[i].x += mouseClick[i].speed;
   		mouseClick[i].y += mouseClick[i].speed;
	}
}

function mouseDragged(){
	var clickedPosition = {
		x: mouseX,
		y: mouseY,
		speed: random(-2, 2)
	};
	mouseClick.push(clickedPosition);
}