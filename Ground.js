class Ground {
    constructor(x,y,width,height) {
      var ground_options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,ground_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      fill("brown");
      rect(this.ground.position.x, this.ground.position.y,900,20);
    }
  };