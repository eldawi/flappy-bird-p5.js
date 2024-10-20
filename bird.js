function Bird() {
  this.y = height/2;
  this.x = 64;
  
  this.gravity = 0.35;
  this.lift = -10;
  this.velocity = 0;
  
  this.show = function() {
    fill("orange");
    circle(this.x, this.y, 32);
  }
  
  this.up = function() {
    this.velocity += this.lift;
  }
  
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.95;
    this.y += this.velocity;
    
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
  
  	if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
