/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//varibles
let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 10;


/**
Description of preload
*/
function preload() {

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

  paddle.move();
  paddle.display();
}
