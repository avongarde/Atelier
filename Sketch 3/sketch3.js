var mySound;

function setup(){
	mySound = createAudio('sound.mp3');
	bubble = {
		x: width/2,
		y: height/2,
		r: 15
	};
	createCanvas(720, 480);
}

function draw(){
	ellipse(bubble.x, bubble.y, bubble.r * 2);
	bubble.x += random(-5, 5);
	bubble.y += random(-5, 5);
	if(bubble.x > width || bubble.x < 0){
		bubble.x = width/2;
		bubble.y = height/2;
	}
	if(bubble.y > height || bubble.y < 0){
		bubble.y = height/2;
		bubble.x = width/2;
	}
}

function mouseClicked(){
	var clickDistance = dist(bubble.x, bubble.y, mouseX, mouseY);
	if(clickDistance < bubble.r){
		fill(100);
		mySound.play();
		console.log(mySound);
	}
}