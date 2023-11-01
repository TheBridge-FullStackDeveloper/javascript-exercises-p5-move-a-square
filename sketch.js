let square = {
  x: 175,
  y: 175,
  size: 50,
  speed: 5
};

let xSpeed = 0;
let ySpeed = 0;

let obstacles = [
  { x1: 175, y1: 400, x2: 200, y2: 350, x3: 225, y3: 400 },
  { x1: 300, y1: 0, x2: 350, y2: 250, x3: 400, y3: 0 }
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
 
  for (let obstacle of obstacles) {
    fill(0, 0, 255);
    triangle(obstacle.x1, obstacle.y1, obstacle.x2, obstacle.y2, obstacle.x3, obstacle.y3);
  }
  fill(255, 0, 0);
  rect(square.x, square.y, square.size, square.size);

  square.x = constrain(square.x, 0, width - square.size);
  square.y = constrain(square.y, 0, height - square.size);

 

  // Move the square based on the key input
  square.x += xSpeed;
  square.y += ySpeed;

  // Constrain the square to prevent it from colliding with the walls
  square.x = constrain(square.x, 0, width - square.size);

  square.y = constrain(square.y, 0, height - square.size);


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

function checkCollision(square, obstacle) {
  let squareRight = square.x + square.size;
  let squareBottom = square.y + square.size;
  return (
    square.x < obstacle.x3 &&
    squareRight > obstacle.x1 &&
    square.y < obstacle.y3 &&
    squareBottom > obstacle.y1
  );
}
