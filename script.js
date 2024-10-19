let bird;
let pipes = [];
//let name = prompt("What's your name?")

function setup() {
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw () {
  background(0, 100, 200);
  
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    
    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }
    
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
      
  }
  
  bird.update();
  bird.show();
  
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
  
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

