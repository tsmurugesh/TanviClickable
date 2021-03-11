/***********************************************************************************
	Clickables and Timers -
	by Tanvi Murugesh

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

// sets up array of images
var images = [];

// positioning variable for the buttons, array
var textButtons = [];
var textButtonYPos = 360;

// setting up variables
var midX;
var midY;
var simpleTimer;
var biteCount;

// funtion variable
var drawFunction;

// load all images and text into an array
function preload() {
    images[0] = loadImage('assets/mango.png');
    images[1] = loadImage('assets/tutti.png');
    images[2] = loadImage('assets/cottoncandsy.png');
    images[3] = loadImage('assets/bdaycake.png');
    images[4] = loadImage('assets/purple.jpg');
    images[5] = loadImage('assets/bowl.png');
    images[6] = loadImage('assets/pink.jpg');
    images[7] = loadImage('assets/yellow.jpg');
    images[8] = loadImage('assets/blue.jpg');
    images[9] = loadImage('assets/rainbow.jpg');
    images[10] = loadImage('assets/sprinkles.png');


}

// Center drawing, drawFunction will be one for default
function setup() {
    createCanvas(500, 500);

    // Center our drawing objects
    imageMode(CENTER);
    textAlign(CENTER);
    textSize(30);
    textFont("Patrick Hand");

    // delermining mid x and y
    midY = height / 2;
    midX = width / 2;
    
    //creates timer
    simpleTimer = new Timer(10000);
    
    //adds 4 buttons to the array of buttons
    textButtons[0] = makeTextButton("mango", 25, textButtonYPos);
    textButtons[1] = makeTextButton("tutti frutti", 140, textButtonYPos);
    textButtons[2] = makeTextButton("cotton candy", 260, textButtonYPos);
    textButtons[3] = makeTextButton("birthday cake", 375, textButtonYPos);

    // set to splash
    drawFunction = drawSplash;
}

// draw function, calls drawfunction variable which is set to splash
function draw() {
    //background("#fbcd15");

    // will call your state machine function
    drawFunction();
}

// for loop to iterate through your button array and draw them on screen
function drawButtons() {
    for (let i = 0; i < textButtons.length; i++) {
        textButtons[i].draw();
    }
}

// function for making button, makes it a clickable, assignes it a width and height, and screen location
function makeTextButton(label, x, y) {
    let myButton = new Clickable();

    myButton.text = label;

    myButton.width = 100;
    myButton.height = 60;

    myButton.locate(x, y);

    myButton.onPress = textButtonPressed;

    return myButton;
}

// function to specify what happened when a button is pressed. takes you to the states with the same text name 
textButtonPressed = function () {
    gotoRoom(this.text);
}

// navigation between states
function gotoRoom(roomName) {
    if (roomName === "mango") {
        drawFunction = drawOne;
    } else if (roomName === "tutti frutti") {
        drawFunction = drawTwo;
    } else if (roomName === "cotton candy") {
        drawFunction = drawThree;
    } else if (roomName === "birthday cake") {
        drawFunction = drawFour;
    }
}



// draws bg image, then bowl, then scoop of ice cream. user must like enough times before the timer runs out
drawOne = function () {
    background("orange");
    image(images[7], midX, midY, width, height);
    image(images[5], midX, midY);
    image(images[0], midX, midY);

    text("click to take enough bites \n before the timer runs out!", midX, midY - 200);
    text("Time: " + Math.round(simpleTimer.getRemainingTime()), midX, midY - 120);

    if (simpleTimer.expired()) {
        if (biteCount < 8) {
            text("click to try again", midX, midY + 150);
            if (mouseIsPressed) {
                simpleTimer.start();
            }
        } else {
            text("good job, press 's' to return", midX, midY + 150);
        }
    }
}

// draws bg image, then bowl, then scoop of ice cream. user must like enough times before the timer runs out
drawTwo = function () {
    background("pink");
    image(images[6], midX, midY, width, height);
    image(images[5], midX, midY);
    image(images[1], midX, midY);

    text("click to take enough bites \n before the timer runs out!", midX, midY - 200);
    text("Time: " + Math.round(simpleTimer.getRemainingTime()), midX, midY - 120);

    if (simpleTimer.expired()) {
        if (biteCount < 10) {
            text("click to try again", midX, midY + 150);
            if (mouseIsPressed) {
                simpleTimer.start();
            }
        } else {
            text("good job, press 's' to return", midX, midY + 150);
        }
    }

}

// draws bg image, then bowl, then scoop of ice cream. user must like enough times before the timer runs out
drawThree = function () {
    background("blue");
    image(images[8], midX, midY, width, height);
    image(images[5], midX, midY);
    image(images[2], midX, midY);

    text("click to take enough bites \n before the timer runs out!", midX, midY - 200);
    text("Time: " + Math.round(simpleTimer.getRemainingTime()), midX, midY - 120);

    if (simpleTimer.expired()) {
        if (biteCount < 14) {
            text("click to try again", midX, midY + 150);
            if (mouseIsPressed) {
                simpleTimer.start();
            }
        } else {
            text("good job, press 's' to return", midX, midY + 150);
        }
    }

}

// draws bg image, then bowl, then scoop of ice cream. user must like enough times before the timer runs out
drawFour = function () {
    background("yellow");
    image(images[9], midX, midY, width, height);
    image(images[5], midX, midY);
    image(images[3], midX, midY);

    text("click to take enough bites \n before the timer runs out!", midX, midY - 200);
    text("Time: " + Math.round(simpleTimer.getRemainingTime()), midX, midY - 120);

    if (simpleTimer.expired()) {
        if (biteCount < 11) {
            text("click to try again", midX, midY + 150);
            if (mouseIsPressed) {
                simpleTimer.start();
            }
        } else {
            text("good job, press 's' to return", midX, midY + 150);
        }
    }
}

// draws background with the 4 buttons to click, resets number of clicks to 0
drawSplash = function (){
    background("red");
    image(images[4], midX, midY, width, height);
    image(images[10], midX, midY,width, height);


    biteCount = 0;
    text("select a flavor!", midX, midY);
    drawButtons();
}



// allows user to use 's' to go back to the main screen 
function keyTyped() {
    if (drawFunction === drawSplash) {
        return;
    } else if (key === 's') {
        drawFunction = drawSplash;
    }
}
//counts number of times clicked
function mousePressed() {
    if (drawFunction === drawOne) {
        biteCount++;
    }
}
