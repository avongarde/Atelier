var mouseClick = [];

function setup(){
    createCanvas(720, 480);
    var button = createButton('Click Here');
    button.mousePressed(clickHere);
}

function draw(){
	//translate(width/2, height/2);
	for(var i = 0; i < mouseClick.length; i++){
		//colorMode(HSB, 100);
		//fill(random(360), random(100), random(100), random(1));	
		fill(mouseClick[i].color);
		ellipse(mouseClick[i].x, mouseClick[i].y, 10);
   		mouseClick[i].x += mouseClick[i].xSpeed;
   		mouseClick[i].y += mouseClick[i].ySpeed;
	}
}

//function mouseDragged(){
function clickHere(){
	var clickedPosition = {
		x: mouseX,
		y: mouseY,
		xSpeed: random(-2, 2),
		ySpeed: random(-2, 2),
		color: color(random(100, 150), random(255), random(255))  	
	};
	mouseClick.push(clickedPosition);
}

function mouseClicked(){
	createP("HELLO");
	//createA()
}