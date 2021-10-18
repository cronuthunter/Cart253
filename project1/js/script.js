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

//key move
window.addEventListener("keydown",(e)=>{
var left= parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  if (e.key=="ArrowLeft" && left > 0){
    player.style.left=left-10+"px";
  }
  else if (e.key=="ArrowRight" && left >= 460) {
    player.style.left=left+10+"px";
  }
});

function simulation() {

  var generateZombie = setInterval())=>{
    var zombie = document.createElement("div");
    zombie.classList.add("zombie");
    //zombie appears ramdomly between 0 + 460
    var zombieLeft =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    zombie.style.left =Math.floor(Math.random()*460) + "px";

    screen.appendChild(rock);
  }, 1500);

  var moveZom = setInterval(() =>{
    var zombie = document.getElementById("zombie");

    if (zombie!=undefined){
      for (var i=0;i<rocks.length;i++){
        //moving zombies down
        var zombie=zombie[i]
        var zomTop = parseInt(
        window.getComputedStyle(zombie).getPropertyValue("top"));
        zombie.style.top=zomTop + 20 + "px";

      }
    }
  }, 450);

}//sim end










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
