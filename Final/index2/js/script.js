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

  document.onmouseup=function(e){
      dragValue=null;
  }

  document.onmousemove=function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";

  }

}//end move




function face1(id){
  var f1 = document.getElementById('f1');
  f1.style.position= "absolute";
  f1.onmousedown= function(){
    dragValue = f1;
  }
}//f1
function face2(id){
  var f2 = document.getElementById('f2');
  f2.style.position= "absolute";
  f2.onmousedown= function(){
    dragValue = f2;
  }
}//f2
