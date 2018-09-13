function setup(){
	createCanvas(720, 480);
}

function draw(){
	ellipse(width/2, height/2, 30);
}

function mouseClicked(){
	if(mouseX < width/2 + 15 && mouseX > width/2 - 15){
		if(mouseY < height/2 + 15 && mouseY > height/2 - 15){
			fill(100);
		}
	}
}