/**
Uplaoding a file expirment.

The program currently only accepts one picture.

*/

"use strict";

//const objectURL = URL.createObjectURL(object);

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});



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
