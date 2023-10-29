let square = {
  x: 175,
  y: 175,
  size: 50,
  speed: 5
};

let xSpeed = 0;
let ySpeed = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  fill(255, 0, 0);
  rect(square.x, square.y, square.size, square.size);

  square.x = constrain(square.x, 0, width - square.size);
  square.y = constrain(square.y, 0, height - square.size);

  square.x += xSpeed;
  square.y += ySpeed;
}

function keyPressed() {
  if (key === 'ArrowUp') {
    ySpeed = -square.speed;
  } else if (key === 'ArrowDown') {
    ySpeed = square.speed;
  } else if (key === 'ArrowLeft') {
    xSpeed = -square.speed;
  } else if (key === 'ArrowRight') {
    xSpeed = square.speed;
  }
}

function keyReleased() {
  if (key === 'ArrowUp' || key === 'ArrowDown') {
    ySpeed = 0;
  } else if (key === 'ArrowLeft' || key === 'ArrowRight') {
    xSpeed = 0;
  }
}
