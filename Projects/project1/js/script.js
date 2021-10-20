/**
Gather Simulation
Claire Amirault

Art Studio Simulation!
-----------------------------------
program complexity:
- draw on canvas
-save image of canvas
-change canvas background
-change stroke size
-
*/
//varibles


//
"use strict";
let state='title';


function preload() {

}


/**
Description of setup
*/


function setup() {
createCanvas(1000,700);

}


/**
Description of draw()
*/
function draw(){


if (state==='title'){
  title();
}

else if (state==='symmetric') {
  symmetric();
}

else if (state==='geometric'){
  geometric();
}

}//end draw


function title() {
  push();
  textSize(40);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('Welcome to Zen Art Studio Simulation!', width/2,height/3);
  textSize(20);
  text('press 1 for symmetric or 2 for geometric', width/2,height/2);
  geoOrSym()
  pop();
}


function symmetric(){
background("#ffffff09")

if(mouseIsPressed==true){
  strokeWeight(20);
  stroke(mouseX,0,mouseY);//colour changing
  point(mouseX-5,mouseY-5);
  point(mouseX*-1+600, mouseY-5);
  point(mouseX*-1+600, mouseY*-1+600);
  point(mouseX-5,mouseY*-1+400);

}
}//end symmetric

function geometric(){
  background('#ffffff09')
  if(mouseIsPressed==true){
  stroke(mouseX,0,mouseY);
  strokeWeight(0.5);
  line(0,0, mouseX, mouseY);
  line(600, 600, mouseX, mouseY);
  line(600,0,mouseX,mouseY);
  line(0,400,mouseX,mouseY);
  }
}

function geoOrSym(){
  if (state==="title"){
    document.addEventListener('keydown', function(event) {
      if(event.keyCode == 49) {
          state='symmetric'
      }
      else if(event.keyCode == 50) {
        state='geometric'

      }
  });
  }

}
