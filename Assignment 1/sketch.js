// Francisco Samayoa ~ Matrix Digital Rain
// References https://www.youtube.com/watch?v=S1TQCi9axzg&t=13s

var globalX = 0;
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
	// Introduce a 'web-safe font' for some variation
	textFont('Verdana');
	textSize(symbolSize); 
}

function draw(){
	// The x position of each stream will increase by 0.1
	globalX += 0.1; 
	background(0, 150);
	// The forEach() method will execute the stream function once for each streams array element
	streams.forEach(function(stream){
		stream.appear();		
	});
}

function Symbol(x, y, speed, first){
	// Defining the parameters for each symbol (size, speed at which they fall, and if it is the first in a stream)
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(2, 20));
	this.first = first;

	this.randomSymbol = function(){
		var charType = round(random(0, 5));
		// Draws from the Katakana Unciode block (96 characters) & Katakana Phonetic Extensions
		// https://en.wikipedia.org/wiki/Katakana_(Unicode_block)
		// https://en.wikipedia.org/wiki/Katakana_Phonetic_Extensions

		// Whenever this.switchInterval divides evenly into frameCount then execute
		if(frameCount % this.switchInterval == 0){
			if(charType >= 3){
				// 0x030A0 (12448) will be added to a random whole between 0 and 96 
				// Converted to a string and set to this.value
				this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
			} else if(charType >= 1){
				this.value = String.fromCharCode(0x31F0 + round(random(0, 10)));
			} else {
				this.value = String.fromCharCode(0x31FA + round(random(0, 6)));
			}
		} 
	}

	this.rain = function(){
		// Increment the y position of the symbol object according to the speed
		// After the stream ends, restart from the top
		if(this.y >= height){
			this.y = 0;
		} else {
			this.y += this.speed;
		}
	}
}

function Stream(){
	// Creating the array for the screen to be populated with symbols
	this.symbols = [];
	// Each stream will contain a random number of symbols between 5 and 35
	this.totalSymbols = round(random(5, 35));
	// Each stream will vary in speed between 2 and 12
	this.speed = random(2, 12);

	this.generateSymbols = function(x, y){
		// Get a random number - from 0 to 4 - and evauate if this number is equal to 1
		// If it is, the whole expression will become true
		// 20% chance the first number in the stream will have a brighter hue and lower alpha
		var first = round(random(0, 4)) == 1;
		for(var i = 0; i <= this.totalSymbols; i++){
			// Create a local variable thats equal to a new symbol, then pass it x, y, speed, and first valuess
			symbol = new Symbol(x, y, this.speed, first);
			symbol.randomSymbol();
			this.symbols.push(symbol);
			// Position each symbol directly under the previous one
			y -= symbolSize;
			// Makes sure that only the first symbol in the stream is set to first
			first = false;
		}
	}

	this.appear = function(){
		// Invoked in the draw function
		// MouseX will control the space between each stream
		translate(map(mouseX, 0, window.innerWidth, 0, globalX), 0);
		// Excute the symbol function for each each element in the symbols array
		this.symbols.forEach(function(symbol){
			if(symbol.first){
				// Using the map function the incoming mouseX value will be re-mapped from the width to the fill colour
				fill (map(mouseX, 0, window.innerWidth, 0, 225), map(mouseX, 0, window.innerWidth, 225, 0), 0, 100);
			} else {
				fill (map(mouseX, 0, window.innerWidth, 0, 255), map(mouseX, 0, window.innerWidth, 255, 0), 0);
			}
			text(symbol.value, symbol.x, symbol.y);
			symbol.rain();
			symbol.randomSymbol();
		});
	}
}