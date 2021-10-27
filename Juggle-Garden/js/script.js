/**
Juggle Garden
Claire Amirault

Add a(nother) form of user-control
  If you chose Juggling, add another form of control beyond the paddle (click to add balls? a keyboard controlled paddle?).
  If you chose Garden, add a user controlled element (a user-controlled flower that moves? the user controlling a bee? a bird? the user as a god who can help flowers grow? planting flowers? the user as an aphid?)
Add a new class and objects
  Add a new class and at least one instance of it in the simulation.
  If you chose Juggling it could be different kind of ball? A chainsaw? (People juggle those right?) An AI paddle?
  If you chose Garden it could be a bird, a slug, a cloud, a fairy?
Add at least two endings
  Currently the simulation never ends, so make it end in at least different two ways
  As per usual, you’ll need states to do this (at least for the simulation and the two endings, you can add a title and instructions too if you like)
  If you chose Juggling, maybe the simulation ends if all the balls fall down or if the user juggles some maximum number of balls successfully?
  If you chose Garden, maybe the simulation ends if all the flowers die or if the user manages to plant enough flowers?



My program:
x change balls to coconut colour
x add a palm tree background
- add music
*/

"use strict";

//varibles
let gravityForce = 0.0025;
let paddle;
let balls = [];
let badBalls = [];
let numBalls = 5;
let numBallsBad = 1;

let palmTree;


/**
Description of preload
*/
let state = 'juggle';

function preload() {
  palmTree = loadImage('assets/beachBG.jpg');

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);


  paddle = new Paddle(300,20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);

  }
}


/**
Description of draw()
*/
function draw() {
  background(0);
  image(palmTree, 0,0);

  if (state === 'title') {
    title();
  }

  else if (state ==='juggle') {
    juggle();
  }

  else if (state === 'yay') {
    yay();
  }

  else if (state === 'sad') {
    sad();
  }
}//end of draw


function juggle(){
  paddle.move();
  paddle.display();

  // A variable to count how many active balls we find
    // this frame
    let numActiveBalls = 0;
    // Loop through all the balls in the array
    for (let i = 0; i < balls.length; i++) {
      // Store the current ball in a variable
      let ball = balls[i];
      // Only update the ball if it's active
      if (ball.active) {
        // Since this is active, add one to our count
        numActiveBalls++;
        // Apply gravity, move, bounce, and display
        ball.gravity(gravityForce);
        ball.move();
        ball.bounce(paddle);
        ball.display();
      }





    }//end juggle

setTimeout(activeBallCheck,3000);//give the balls a chance to fall
//if after 3 seconds user has ball, yay!

  function activeBallCheck(){
    if (numActiveBalls <=3) {
      state='yay';
    }

    if (numActiveBalls === 0) {
      state='sad';
    }
  }//end ball check



}//end juggle




function yay(){
  push();
  textSize(30);
  fill(0);
  textAlign(CENTER,CENTER);
  text("YAY! monkey doesn't need to UberEats tonight!", width/2,height/2);
  pop();
}//end of yay

function sad(){
  push();
  textSize(30);
  fill(0);
  textAlign(CENTER,CENTER);
  text("You made monkey hangry!!! >:(", width/2,height/2);
  pop();
}//end of sad
