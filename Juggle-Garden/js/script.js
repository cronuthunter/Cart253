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
let numBalls = 10;

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
function title(){

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

  else if (state === 'love') {
    yay();
  }

  else if (state === 'sadness') {
    sad();
  }
}//end of draw


function juggle(){
  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }
}//end juggle

function checkBalls(){
  if (ball.active=balls[0]){
    state=sad;
  }
  else if(ball.active<=balls[5]){
      state=yay;
  }
}//end check balls
