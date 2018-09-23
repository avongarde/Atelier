// Francisco Samayoa ~ Matrix Digital Rain
// References https://www.youtube.com/watch?v=S1TQCi9axzg&t=13s

var symbol;
var symbolSize = 60;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	// 
	symbol = new symbol(width/2, 0, random(5, 10));
	symbol.randomSymbol();
	textSize(symbolSize); 
}

function draw(){
	background(0);
	symbol.appear();
}

function symbol(x, y, speed){
	// 
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;

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
		// Invoked in the draw function
		this.rain();
	}

	this.rain = function(){
		// Increment the y position of the symbol object according to the speed
		this.y += this.speed;
	}
}

function stream(){

}