/**
Dodge Em

Claire Amirault
Cart 253B

*/
//objects + vars
let bg ={
   r:0,
   g:0,
   b:0,
   w:1000,
   h:720,
   };

 let covid19 ={
   x:0,
   y:250,
   size:250,
   speed:10,
   r:250,
   };

 let user ={
   size: 100,
   rgb:250,
   };

//elipse start
var x = 200;
var y = 200;
///////////////////
function setup() {
   createCanvas(bg.w,bg.h);
   noCursor();

   //set the value ONCE at the start
   covid19.y=random(720);
   };


function draw() {

   background(bg.r,bg.g,bg.b);

   //static
   for( let pts =0; pts<=1000; pts++){

       stroke('white');
       point(random(bg.w),random(bg.h));
       };

   //move and draw covid
   covid19.x=covid19.x+covid19.speed;
     if(covid19.x>=bg.w){
       covid19.x=0;
       covid19.y=random(720);
       covid19.speed+=2;
       if(covid19.speed>=30){covid19.speed=30};
     };

   noStroke();
   fill(covid19.r,0,0);
   ellipse(covid19.x,covid19.y,covid19.size,covid19.size);

   //draw user mouse
   noStroke();
   fill(user.rgb,user.rgb,user.rgb);
   ellipse(x,y,user.size,user.size);

   function keyPressed(){
     if (keyCode=== UP_ARROW){
       y = y-10;
     }
     else if (KeyCode===DOWN_ARROW){
       y= y+10;
     }
     if (keyCode === LEFT_ARRO)
   }

   //dot intersection

   let d = int(dist(covid19.x,covid19.y,mouseX,mouseY));
   if(d <= covid19.size/2 + user.size/2){
     noLoop();

     fill(250);
     textAlign(CENTER);
     textSize(50);
     text('Covid Touch! EW! Your Score:'+ covid19.speed,bg.w/2,bg.h/2)
   };

   console.log(d);
   }
