/***********************************************************************************
	SimpleStateMachine -
	by Tanvi Murugesh

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawSplash(), drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable
  * starts with drawSplash and waits for a mousePressed event
  * adds a key, 's' to return to the splash screen

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing variables for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];

// Array of text
var textButtons  = [];
var textButtonXPos = 40;
var lineHeight = 50;
var startY = 300;

var midX;
var midY;

// easing variables 
var a = 1;
var b = 1;
var easing = 0.08;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 100;

// load all images and text into an array
function preload() {
  images[0] = loadImage('assets/mango.png');
  images[1] = loadImage('assets/tutti.png');
  images[2] = loadImage('assets/cottoncandsy.png');
  images[3] = loadImage('assets/bdaycake.png');
  images[4] = loadImage('assets/gingham.jpg');
  images[5] = loadImage('assets/bowl.png');

}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(500,500);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(30);
  textFont("Fugaz One");

  // easing information
  midY = height/2;
  midX = width/2;

  textButtons[0] = makeTextButton("mango", textButtonXPos, 100);
  textButtons[1] = makeTextButton("tutti frutti", textButtonXPos, 140);
  textButtons[2] = makeTextButton("cotton candy", textButtonXPos, 180);
  textButtons[3] = makeTextButton("birthday cake", textButtonXPos, 220);

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
// easing calculations
function draw() {
  //background("#fbcd15");

  //mouseEasing();

  // will call your state machine function
  drawFunction();
}

function drawButtons(){
  for(let i = 0; i < textButtons.length; i++){
    textButtons[i].draw();
  }
}

//========= BUTTON MAKING ========= //
function makeTextButton(label, x, y){
  let tb = new Clickable();

  tb.text = label;

  tb.width = 100;
  tb.height = 30;

  tb.locate(x, y);

  tb.onPress = textButtonPressed;
  // tb.onHover = textButtonOnHover;
  // tb.onOutside = textButtonOnOutside;

  return tb;
}

//========= CALLBACK ========= //
textButtonPressed = function(){
  gotoRoom(this.text);
}

//========= NAV ========= //
function gotoRoom(roomName){
  if (roomName === "mango"){
    drawFunction = drawOne;
  }
  else if (roomName === "tutti frutti"){
    drawFunction = drawTwo;
  }
  else if (roomName === "cotton candy"){
    drawFunction = drawThree;
  }
  else if (roomName === "birthday cake"){
    drawFunction = drawFour;
  }
}


//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   background("orange");
   image(images[5], midX, midY);
   image(images[0], midX, midY);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   background("pink");
   image(images[5], midX, midY);
   image(images[1], midX, midY);

}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   background("blue");
   image(images[5], midX, midY);
   image(images[2], midX, midY);

}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   background("yellow");
   image(images[5], midX, midY);
   image(images[3], midX, midY);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
  background("red");
  text("home!",midX,midY);
  drawButtons();
}


// mouse easing stuff all in one place
function mouseEasing(){
  let targetX = mouseX;
  let dx = targetX - a;
  a += dx * easing;

  let targetY = mouseY;
  let dy = targetY - b;
  b += dy * easing;
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  }

  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === 's' ) {
    drawFunction = drawSplash;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawInst;
  }
}
