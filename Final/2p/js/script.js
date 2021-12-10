/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
var dragValue;

//

function move(){//all function are in move() becuase it is called at the begining of the HTML w onload
  face1();
  face2();
  face3();
  face4();
  face5();
  face6();
  face7();
  face8();
  face9();
  face10();
  face11();
  face12();
  face13();
  //
  holi1();
  holi2();
  holi3();
  holi4();


//drops face at a postion when mouse is released.
  document.onmouseup=function(e){
      dragValue=null;
  }
//moves the face with the mouse
  document.onmousemove=function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";

  }

}//end move



//function to pick up each face
//f1
function face1(id){
  var f1 = document.getElementById('f1');
  f1.style.right="1300px"; // aligned elements to left of the screen
  f1.style.top="720px";// aligned elements down the screen
  f1.style.position= "absolute";
  f1.onmousedown= function(){
    dragValue = f1;
  }
}//f2
function face2(id){
  var f2 = document.getElementById('f2');
  f2.style.right="1300px";
  f2.style.top="660px";
  f2.style.position= "absolute";
  f2.onmousedown= function(){
    dragValue = f2;
  }
}//f3
function face3(id){
  var f3 = document.getElementById('f3');
  f3.style.right="1300px";
  f3.style.top="600px";
  f3.style.position= "absolute";
  f3.onmousedown= function(){
    dragValue = f3;
  }
}//f4
function face4(id){
  var f4 = document.getElementById('f4');
  f4.style.right="1300px";
  f4.style.top="540px";
  f4.style.position= "absolute";
  f4.onmousedown= function(){
    dragValue = f4;
  }
}//f5
function face5(id){
  var f5 = document.getElementById('f5');
  f5.style.right="1300px";
  f5.style.top="480px";
  f5.style.position= "absolute";
  f5.onmousedown= function(){
    dragValue = f5;
  }
}//f6
function face6(id){
  var f6 = document.getElementById('f6');
  f6.style.right="1300px";
  f6.style.top="420px";
  f6.style.position= "absolute";
  f6.onmousedown= function(){
    dragValue = f6;
  }
}//f7
function face7(id){
  var f7 = document.getElementById('f7');
  f7.style.right="1300px";
  f7.style.top="360px";
  f7.style.position= "absolute";
  f7.onmousedown= function(){
    dragValue = f7;
  }
}//f8
function face8(id){
  var f8 = document.getElementById('f8');
  f8.style.right="1300px";
  f8.style.top="300px";
  f8.style.position= "absolute";
  f8.onmousedown= function(){
    dragValue = f8;
  }
}//f9
function face9(id){
  var f9 = document.getElementById('f9');
  f9.style.right="1300px";
  f9.style.top="240px";
  f9.style.position= "absolute";
  f9.onmousedown= function(){
    dragValue = f9;
  }
}//f10
function face10(id){
  var f10 = document.getElementById('f10');
  f10.style.right="1300px";
  f10.style.top="180px";
  f10.style.position= "absolute";
  f10.onmousedown= function(){
    dragValue = f10;
  }
}//f11
function face11(id){
  var f11 = document.getElementById('f11');
  f11.style.right="1300px";
  f11.style.top="120px";
  f11.style.position= "absolute";
  f11.onmousedown= function(){
    dragValue = f11;
  }
}//f12
function face12(id){
  var f12 = document.getElementById('f12');
  f12.style.right="1300px";
  f12.style.top="90px";
  f12.style.position= "absolute";
  f12.onmousedown= function(){
    dragValue = f12;
  }
}//f13
function face13(id){
  var f13 = document.getElementById('f13');
  f13.style.right="1300px";
  f13.style.top="30px";
  f13.style.position= "absolute";
  f13.onmousedown= function(){
    dragValue = f13;
  }
}
////holiday grettings
function holi1(id){
  var xmas = document.getElementById('xmas');
  xmas.style.left="1300px";
  xmas.style.top="30px";
  xmas.style.position= "absolute";
  xmas.onmousedown= function(){
    dragValue = xmas;
  }
}
function holi2(id){
  var hanu = document.getElementById('hanu');
  hanu.style.left="1300px";
  hanu.style.top="110px";
  hanu.style.position= "absolute";
  hanu.onmousedown= function(){
    dragValue = hanu;
  }
}
function holi3(id){
  var kwan = document.getElementById('kwan');
  kwan.style.left="1300px";
  kwan.style.top="190px";
  kwan.style.position= "absolute";
  kwan.onmousedown= function(){
    dragValue = kwan;
  }
}
function holi4(id){
  var holi = document.getElementById('holi');
  holi.style.left="1300px";
  holi.style.top="270px";
  holi.style.position= "absolute";
  holi.onmousedown= function(){
    dragValue = holi;
  }
}
