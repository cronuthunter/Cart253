/**
Zombie Simulation, Project 1 Cart253
Claire Amirault

This is a zombie apocalypse simulation game. Player moves with the arrow keys and
shoots the zombies with the space bar. The simulation is set in an abandon town
overun by zombies and you must save your group from the heard.

The program is a bit more complex then what we have done in class so I used HTML
and CSS to do this project becasue I am more fimilar with those.
*all graphics done by me

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
  if ((e.key= "ArrowUp" || e.keyCode == 32) {
    var bullet = document.createElement("div");
    screen.appendChild(bullet);
    //bullets
    var moveBullet = setInterval(()=>
      //destroying zombies
      var zombie = document.getElementsByClassName('zombie');
      for (var i=0;i<zombie.length;i++){
        var zombie = zombie[i];

        var zombieBound = zombie.getBoundingClientRect();
        var bulletBound = bullet.getBoundingClientRect();

        if (bulletBound.left >= zombieBound.left && bulletBound.right >= zombieBound.right
         bulletBound.top <= zombieBound.top && bulletBound.bottom <= zombieBound.bottom){
           zombie.parentElement.removeChild(zombie); //removes hit zombie

         }
       }

      }

      var bulletBottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
    );
    if (bulletBottom >= 500){
      clearInterval(moveBullet);
    }
    bullet.style.left=left + "px";
    bullet.style.bottom = bulletBottom + 3 + "px";
    },50);
  }
});

function simulation() {

  var generateZombie = setInterval())=>{
    var zombie = document.createElement("div");
    zombie.classList.add("zombie");
    //zombie appears ramdomly between 0 + 460
    var zombieLeft =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    zombie.style.left =Math.floor(Math.random()*460) + "px";

    screen.appendChild(zombie);
  }, 1500);

  var moveZom = setInterval(() =>{
    var zombie = document.getElementById("zombie");

    if (zombie!=undefined){
      for (var i=0;i<zombie.length;i++){
        //moving zombies down
        var zombie=zombie[i]
        var zomTop = parseInt(
        window.getComputedStyle(zombie).getPropertyValue("top"));

        if(zomTop >= 475){
          ///switch states
        }

        zombie.style.top=zomTop + 25 + "px";

      }
    }
  }, 100);

}//sim end
