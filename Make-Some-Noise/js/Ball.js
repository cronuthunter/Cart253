class Ball{

  constructor(x,y){
    this.x=x;
    this.y=y;
    this.size=50;
    this.fill= {
      r: random(200,255),
      g: random(200,255),
      b: random(200,255)
    }
    this.speed=3;
    this.vx= random(-this.speed,this.speed);
    this.vy=random(-this.speed,this.speed);
  }
}
