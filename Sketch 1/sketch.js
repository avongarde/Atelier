function setup(){
    createCanvas(720, 480);
    
}

function draw() {
	background(100, 20, 255);
    for(var i = 0; i < 100; i++){
        //ellipse(width/2, height/2, 10);
        ellipse(random(width), random(height), 10);
    }
}