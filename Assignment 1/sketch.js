// Francisco Samayoa ~ Matrix Digital Rain
// References https://www.youtube.com/watch?v=S1TQCi9axzg&t=13s

// var symbol;
var symbolSize = 20;
var streams = [];

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	var x = 0;
	for(var i = 0; i <= width / symbolSize; i++){
		var stream = new Stream();
		stream.generateSymbols(x, random(-1000, 0));
		streams.push(stream);
		x += symbolSize;
	}
	textSize(symbolSize); 
}

function draw(){
	background(0, 150);
	//
	streams.forEach(function(stream){
		stream.appear();
	});
}

function Symbol(x, y, speed, first){
	// 
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(2, 20));
	this.first = first;

	this.randomSymbol = function(){
		// Draws from the Katakana Unciode block (96 characters)
		// https://en.wikipedia.org/wiki/Katakana_(Unicode_block)

		// Whenever this.switchInterval divides evenly into frameCount then execute
		if(frameCount % this.switchInterval == 0){
			// 0x030A0 (12448) will be added to a random whole between 0 and 96 
			// Converted to a string and set to this.value
			this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
		}
	}

	this.rain = function(){
		// Increment the y position of the symbol object according to the speed
		// 
		if(this.y >= height){
			this.y = 0;
		} else {
			this.y += this.speed;
		}
	}
}

function Stream(){
	//
	this.symbols = [];
	this.totalSymbols = round(random(5, 35));
	this.speed = random(2, 12);

	this.generateSymbols = function(x, y){
		// Get a random number - from 0 to 4 - and evauate if this number is equal to 1
		// If it is, the whole expression will become true
		// 20% chance the first number in the stream will have a brighter hue
		var first = round(random(0, 4)) == 1;
		for(var i = 0; i <= this.totalSymbols; i++){
			// 
			symbol = new Symbol(x, y, this.speed, first);
			symbol.randomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			//
			first = false;
		}
	}

	this.appear = function(){
		//
		// Invoked in the draw function
		this.symbols.forEach(function(symbol){
			if(symbol.first){
				fill(180, 255, 180);
			} else {
				fill (0, 255, 60);
			}
			text(symbol.value, symbol.x, symbol.y);
			symbol.rain();
			symbol.randomSymbol();
		});
	}
}



