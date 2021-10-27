class Paddle {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
  }

  move() {
    keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 10;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }
  
  }

  display() {
    push();
    fill(245, 206, 140);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
