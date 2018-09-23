// Francisco Samayoa ~ Matrix Digital Rain
// References https://www.youtube.com/watch?v=S1TQCi9axzg&t=13s

var symbol;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	// 
	symbol = new symbol(width/2, height/2);
	symbol.randomSymbol();
}

function draw(){
	symbol.appear();
}

function symbol(x, y){
	// 
	this.x = x;
	this.y = y;
	this.value;

	this.randomSymbol = function(){
		// Draws from the Katakana Unciode block (96 characters)
		// https://en.wikipedia.org/wiki/Katakana_(Unicode_block)

		// 0x030A0 (12448) will be added to a random whole between 0 and 96 
		// Converted to a string and set to this.value
		this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
	}

	this.appear = function(){
		fill(0, 255, 60);
		text(this.value, this.x, this.y);
	}
}

function stream(){

}