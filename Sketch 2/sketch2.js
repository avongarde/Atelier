var mouseClick = [];

function setup(){
    createCanvas(720, 480);
}

function draw(){
	for(var i = 0; i < mouseClick.length; i++){
   		ellipse(mouseClick[i].x, mouseClick[i].y, 10);
   		mouseClick[i].x++;
   		mouseClick[i].y++;
	}
}

function mouseClicked(){
	var clickedPosition = {
		x: mouseX,
		y: mouseY
	};
	mouseClick.push(clickedPosition);
}