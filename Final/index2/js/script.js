/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
var dragValue;

//

function move(){
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
  face14();

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
  f1.style.position= "absolute";
  f1.onmousedown= function(){
    dragValue = f1;
  }
}//f2
function face2(id){
  var f2 = document.getElementById('f2');
  f2.style.position= "absolute";
  f2.onmousedown= function(){
    dragValue = f2;
  }
}//f3
function face3(id){
  var f3 = document.getElementById('f3');
  f3.style.position= "absolute";
  f3.onmousedown= function(){
    dragValue = f3;
  }
}//f4
function face4(id){
  var f2 = document.getElementById('f4');
  f4.style.position= "absolute";
  f4.onmousedown= function(){
    dragValue = f4;
  }
}//f5
function face5(id){
  var f5 = document.getElementById('f5');
  f5.style.position= "absolute";
  f5.onmousedown= function(){
    dragValue = f5;
  }
}//f6
function face6(id){
  var f6 = document.getElementById('f6');
  f6.style.position= "absolute";
  f6.onmousedown= function(){
    dragValue = f6;
  }
}//f7
function face7(id){
  var f7 = document.getElementById('f7');
  f7.style.position= "absolute";
  f7.onmousedown= function(){
    dragValue = f7;
  }
}//f8
function face8(id){
  var f2 = document.getElementById('f8');
  f8.style.position= "absolute";
  f8.onmousedown= function(){
    dragValue = f8;
  }
}//f9
function face9(id){
  var f2 = document.getElementById('f9');
  f9.style.position= "absolute";
  f9.onmousedown= function(){
    dragValue = f9;
  }
}//f10
function face10(id){
  var f10 = document.getElementById('f10');
  f10.style.position= "absolute";
  f10.onmousedown= function(){
    dragValue = f10;
  }
}//f11
function face11(id){
  var f11 = document.getElementById('f11');
  f11.style.position= "absolute";
  f11.onmousedown= function(){
    dragValue = f11;
  }
}//f12
function face12(id){
  var f12 = document.getElementById('f12');
  f12.style.position= "absolute";
  f12.onmousedown= function(){
    dragValue = f12;
  }
}//f13
function face13(id){
  var f13 = document.getElementById('f13');
  f13.style.position= "absolute";
  f13.onmousedown= function(){
    dragValue = f13;
  }
}//f14
function face14(id){
  var f14 = document.getElementById('f14');
  f14.style.position= "absolute";
  f14.onmousedown= function(){
    dragValue = f14;
  }
}
