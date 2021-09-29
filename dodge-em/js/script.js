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
   h:710,
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
   fill(229,204,255);
   ellipse(covid19.x,covid19.y,covid19.size,covid19.size);

   //draw user mouse
   noStroke();
   fill(0,204,0);
   ellipse(mouseX,mouseY,user.size,user.size);


   //dot intersection

   let d = int(dist(covid19.x,covid19.y,mouseX,mouseY));
   if(d <= covid19.size/2 + user.size/2){
     noLoop();

     fill(250);
     textAlign(CENTER);
     textSize(40);
     text("You're FIRED From NASA, your final paycheck: $"+ covid19.speed,bg.w/2,bg.h/2)
   };



   console.log(d);
   }
