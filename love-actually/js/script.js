/**

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
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LOVE?', width/2,height/2);
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
  textSize(64);
  fill(255,0,0);
  textAlign(CENTER,CENTER);
  text('LOVE!<3', width/2,height/2);
  pop();
}

function sadness(){
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text('not a match:(', width/2,height/2);
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
  //display circles
  ellipse(circle1.x,circle1.y, circle1.size);
  ellipse(circle2.x,circle2.y, circle2.size);
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
