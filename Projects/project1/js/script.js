/**
Gather Simulation
Claire Amirault

Art Studio Simulation!
-----------------------------------
program complexity:
- draw on canvas
-save image of canvas
-change canvas background
-
*/
//varibles


"use strict";
let state='simulation';


function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(1024,768);
}


/**
Description of draw()
*/
function draw(){

if (state==='title'){
  title();
}

else if (state==='simulation') {
  simulation1();
}

}//end draw


function title() {
  push();
  textSize(40);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('Welcome to Art Studio Simulation!', width/2,height/2);
  pop();
}


function simulation1(){
if(mouseIsPressed==true){
  stroke(mouseX,0,mouseY);
  strokeWeight(20);
  point(mouseX-5,mouseY-5);
  point(mouseX*-1+600, mouseY-5);
  point(mouseX*-1+600, mouseY*-1+600);
  point(mouseX-5,mouseY*-1+400);

}
}//end simulation
