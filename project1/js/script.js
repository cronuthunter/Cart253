/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

///////////Varibles+Objects/////////

var player = document.getElementById("player");
var screen = document.getElementById("screen");
//////////
window.addEventListener("keydown",(e)=>{
var left= parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  if (e.key=="ArrowLeft" && left > 0){
    player.style.left=left-10+"px";
  }
  else if (e.key=="ArrowRight" && left >= 460) {
    player.style.left=left+10+"px";
  }
}


var generateZombie = setInterval())=>{
  var zombie = document.createElement("div");
  zombie.classList.add("zombie");
  var zombieLeft =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  zombie.style.left =Math.
}












/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

}


/**
Description of draw()
*/
function draw() {

}
