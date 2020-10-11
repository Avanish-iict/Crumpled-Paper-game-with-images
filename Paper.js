class Paper{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.0,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 90;
      this.height = 90;
      this.image = loadImage("Sprites/Pap.png");
      World.add(world,this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 150, 0, this.width, this.height);
      pop();
    }
}
