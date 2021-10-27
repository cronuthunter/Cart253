class Paddle {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
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
