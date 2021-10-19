/**
Zombie Simulation, Project 1 Cart253
Claire Amirault

This is a zombie apocalypse simulation game. Player moves with the arrow keys and
shoots the zombies with the space bar. The simulation is set in an abandon town
overun by zombies and you must save your group from the heard.

The program is a bit more complex then what we have done in class so I used HTML
and CSS to do this project becasue I am more fimilar with those.

https://www.youtube.com/watch?v=mwl95yvl-n0&list=LL&index=1
source code^ thought I could change and simplify it into somwthing I could
understand but i failed:( Maybe I can revist at the end of the semester. 
*all graphics done by me

*/



///////////Varibles+Objects/////////


var player = document.getElementById("player");
var screen = document.getElementById("screen");
//////////
let state = "title"; //start with the title screen


function draw(){
  if (state ==="title"){
    title();
  }
  else if (state ==="simulation"){
    simulation();
  }
//  else if (state==="gameOver"){
    //gameOver();
  //}
}


function title(){
  push();
  background(0,0,0)
  textSize(50);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('Welcome to The Apocalypse', width/2,height/2);
  textSize(20);
  text('Move with arrow keys. Click to start', width/2 , height/1.5);
  pop();
}


function simulation() {

  window.addEventListener("keydown", (e) => {
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0) {
      player.style.left = left - 0.5 + "px";
    }
    //
    else if (e.key == "ArrowRight" && left <= 460) {
      player.style.left = left + 0.5 + "px";
    }

    if (e.key == "ArrowUp" || e.keyCode == 32) {
      //32 is for space key
      var bullet = document.createElement("div");
      bullet.classList.add("bullets");
      screen.appendChild(bullet);

      var moveBullet = setInterval(() => {
        var bulletBottom = document.getElementsByClassName("bullet");


        for (var i = 0; i < zombie.length; i++) {
          var zombies = zombie[i];
          if (zombies != undefined) {
            var zomBound = zombies.getBoundingClientRect();
            var bulletBound = bullet.getBoundingClientRect();

            //Condition to check whether the rock/alien and the bullet are at the same position

            if (
              bulletBound.left >= zomBound.left &&
              bulletBound.right <= zomBound.right &&
              bulletBound.top <= zomBound.top &&
              bulletBound.bottom <= zomBound.bottom
            ) {
              zombies.parentElement.removeChild(zombies); //removing hit zombie

            }
          }
        }
        var bulletBottom = parseInt(
          window.getComputedStyle(bullet).getPropertyValue("bottom")
        );
        bullet.style.bottom = bulletbottom + 3 + "px";
      },50);
    }
  });



        //Stops the bullet from moving outside the gamebox
        if (bulletBottom >= 500) {
          clearInterval(moveBullet);
        }

        bullet.style.left = left + "px"; //bullet should always be placed at the top of my jet..!
        bullet.style.bottom = bulletBottom + 3 + "px";
      });
    }
  });

  var generateZombie = setInterval(() => {
    var zombies = document.createElement("div");
    zombies.classList.add("zombie");
    //Just getting the left of the rock to place it in random position...
    var zomLeft = parseInt(
      window.getComputedStyle(zombies).getPropertyValue("left")
    );
    //generate value between 0 to 450 where 450 => board width - rock width
    zombies.style.left = Math.floor(Math.random() * 100) + "px";

    screen.appendChild(zombies);
  }, 1000);

  var moveZom = setInterval(() => {
    var zombie = document.getElementsByClassName("zombie");

    if (zombie != undefined) {
      for (var i = 0; i < zombie.length; i++) {
        //Now I have to increase the top of each rock,so that the rocks can move downwards..
        var zombies = zombie[i]; //getting each rock
        var zomTop = parseInt(
          window.getComputedStyle(zombies).getPropertyValue("top")
        );
        //475 => boardheight - rockheight + 25
        if (zomTop >= 475) {
          state="gameOver";
        }

        zombies.style.top = zomTop + 25 + "px";
      }
    }
  }, 450);


}//sim end

function gameOver(){
  push();
  textSize(40);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text('Game Over', width/2,height/2);
  pop();
}

function mousePressed(){
  if (state=== "title"){
    state="simulation"
  }
}
