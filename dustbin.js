class Dustbin{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle)
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS)
        rotate(angle);
        imageMode(CENTER);
        fill(255)
        image(this.image, 0, 0, this.width+100, this.height+100);
        pop();
      }
}