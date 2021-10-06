/**
CLaire Amirault - Cart 253B

A simple program about finding a cat that uses key inputs.
*/
//Objects
let circle1={
  x:undefined,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:3,
  beingDragged: false,
  active: true
};

let circle2={
  x:undefined,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:2
};

let state = 'title'; // start with title, mouse click will change it to simulation then output love or sadness
////////////////main//////////////////////////////
function preload(){
  //img=loadImage('images/catHead.png')
}

function setup() {
createCanvas(500,500);
setupCircles();

function setupCircles(){
  //position circles set seprate from each other
  circle1.x=width/3;
  circle2.x=2 * width / 3;
  circle2.speed=random(1,5);
  //start circles moving in a random direction
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
  }
}

///
function draw() {
  background(0);

  if (state === 'title') {
    title();
  }

  else if (state ==='simulation') {
    simulation();
  }

  else if (state === 'love') {
    love();
  }

  else if (state === 'sadness') {
    sadness();
  }

  d = int(dist(circle1.x, circle1.y, circle2.x, circle2.y));
          if(d < 150){
            fastCirc();
          };
}

function title() {
  push();
  textSize(50);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('Look For A Cat?', width/2,height/2);
  textSize(30);
  text('Press any key to start', width/2 , height/1.5);
  pop();
}
function simulation(){
  move();
  checkOffScreen();
  checkOverlap();
  userKeys();
  display();
}

function love(){
  push();
  textSize(50);
  fill(255,0,0);
  textAlign(CENTER,CENTER);
  text('You Found a Kitty!!', width/2,height/2);
  text('<3', width/2, height/1.5);
  pop();
}

function sadness(){
  push();
  textSize(30);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text('That is not the cat for you.', width/2,height/2);
  textSize(40)
  text('Try Again!', width/2, height/1.5);
  pop();
}

function move(){
  circle1.x=circle1.x + circle1.vx;
  circle1.y=circle1.y + circle1.vy;

  circle2.x=circle2.x + circle2.vx;
  circle2.y=circle2.y + circle2.vy;
}

function checkOffScreen(){
  //check if circles have gone off screen

  if (circle1.x<0 || circle1.x>width || circle1.y<0 || circle1.y>height || circle2.x<0 || circle2.x>width || circle2.y<0 || circle2.y>height){
    state = 'sadness';
  }
}

function checkOverlap(){
  // check if circles overlap
  let d= dist(circle1.x, circle1.y,circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = 'love';
  }
}


function display(){
  //add photo to ellipse, could not figure this part out, left it in incase you wanted to take a look at my thinking.
  //let photo,maskImage
  //preload();
  //image(photo,0,0);
 //maskImage = createGraphics(300, 200)
  //maskImage.ellipse(circle2.x,circle2.y, circle2.size);
  //photo.mask(maskImage);
  //image(photo, 300,0)
  //display circles
  ellipse(circle2.x,circle2.y, circle2.size);
  ellipse(circle1.x,circle1.y, circle1.size);

}

function keyPressed(){
  if (state === 'title'){
    state = 'simulation';
  }
}


function fastCirc(){
  circle2.vy = circle2.vy + random(-5,5);
  circle2.vx =  circle2.vx + random(-5,5)
}

function userKeys (){
if (keyIsDown(LEFT_ARROW)){
    circle1.x -= circle1.speed
        };
if (keyIsDown(RIGHT_ARROW)){
    circle1.x += circle1.speed
        };
if (keyIsDown(UP_ARROW)){
    circle1.y -= circle1.speed
        };
if (keyIsDown(DOWN_ARROW)){
    circle1.y += circle1.speed
        };
}
