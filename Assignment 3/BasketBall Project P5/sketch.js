/*
   DIGF 2004 Atelier 1
   Kate Hartman
   Experiment 3 - Study 7
   Arduino to P5.js - sending value for (3) sensors
   Based on based on the Serial Input to P5.js Lab on the ITP Physical Computing site:
   https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
   */

var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem14621';  // fill in your serial
var inData;
// for incoming serial
var sensor1;
var sensor2;
var sensor3;
var sensor4;

var font;

var bg;

var backboardSensor;
var netSwitch;
var twoPointSensor;
var threePointSensor;

var jumbotronImg;

var twoOrThree = 0; // The variable that's added to the store
var totalScore = 0;

var timer = 60.00;
var twoDigits;

var canScore = true;


function setup() {

    jumbotronImg = loadImage("assets/BG.jpg");
	createCanvas(innerWidth, innerHeight);
    background(255);

    serialSetup();

    setTimeout(beginGame, 1000);

    frameRate(240);
}
function beginGame(){

    setInterval (function(){ if (timer > 0.01) {timer -= 0.01}} , 10);

}
function draw() {

    background(jumbotronImg);


   //ASIGNMENTS
    netSwitch = sensor1;
    twoPointSensor = sensor2;
    threePointSensor = sensor3;
    //backboardSensor = sensor4;

    //DETERMINE WHETHER 2 OR THREE POINTS
    if (twoPointSensor > 50) {

        twoOrThree = 2;
        console.log("Shooting for 2");

    } else if (threePointSensor > 60){

        twoOrThree = 3;
        console.log("Shooting for 3");
    }


    //DETERMINE IF THEY SCORED
     if (netSwitch == 1){

         if (canScore){
         //Run the score function
         scoreBasket();
         //Make it so it wont detect more than one score
         canScore = false;
         //Make it so after one second it comes back to true
         setTimeout(function(){canScore = true},400);
         }

     }


    //DRAW SCORE
    fill("#FCEE21");
    textSize(150);
    textFont('Digital');
    textAlign(CENTER, CENTER);
    text(totalScore.toString(), innerWidth/2, 5 * innerHeight/7);

    //DRAW TIMER WITH TWO DIGITS
    fill("#ED1C24");
    textSize(150);
    textFont('Digital');
    textAlign(LEFT);
    twoDigits = timer.toFixed(2);
    text(twoDigits.toString(), innerWidth/2 - 150, 1 * innerHeight/3);

    //DRAW POWER
    fill("#22B573");
    textSize(150);
    textFont('Digital');
    textAlign(CENTER, CENTER);
    //text(backboardSensor.toString() + "%", 1 * innerWidth/4 + 10, 5 * innerHeight/7);
    //text(backboardSensor.toString() + "%", 3 * innerWidth/4, 5 * innerHeight/7);




}

function scoreBasket(){

    totalScore += twoOrThree;
    console.log("Scored " + twoOrThree + "points!");


}



//┏━━━┓ ┏━━━┓ ┏━━━┓ ┏━━┓ ┏━━━┓ ┏┓
//┃┏━┓┃ ┃┏━━┛ ┃┏━┓┃ ┗┫┣┛ ┃┏━┓┃ ┃┃
//┃┗━━┓ ┃┗━━┓ ┃┗━┛┃  ┃┃  ┃┃ ┃┃ ┃┃
//┗━━┓┃ ┃┏━━┛ ┃┏┓┏┛  ┃┃  ┃┗━┛┃ ┃┃ ┏┓
//┃┗━┛┃ ┃┗━━┓ ┃┃┃┗┓ ┏┫┣┓ ┃┏━┓┃ ┃┗━┛┃
//┗━━━┛ ┗━━━┛ ┗┛┗━┛ ┗━━┛ ┗┛ ┗┛ ┗━━━┛

function serialSetup(){

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

 serial.list(); // list the serial ports
 serial.open(portName);              // open a serial port


}
 function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');

  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');            // split the string on the commas
    if (sensors.length > 3) {                      // if there are three elements
      sensor1 = sensors[0];
      sensor2 = sensors[1];
      sensor3 = sensors[2];
      //sensor4 = sensors[3];


        console.log(sensor1 + "," + sensor2 + ","+ sensor3);

    }
  }
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}


// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
}
