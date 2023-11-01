let square = {
  x: 0,
  y: 350,
  size: 50,
  gravity: 0.4,
  ySpeed: 0,
  isJumping: false,
};

let obstacle = {
  x: 100,
  y: 350,
  width: 120,
  height: 50,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  fill(0, 255, 0);
  rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  fill(255, 0, 0);
  rect(square.x, square.y, square.size, square.size);
  move();
}

function move() {
  let nuevaX = square.x;
  let nuevaY = square.y;

  if (keyIsDown(LEFT_ARROW)) {
    if (square.x - 5 >= 0 && !checkCollision(nuevaX - 5, nuevaY)) {
      nuevaX = square.x - 5;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (square.x + 5 <= 400 - square.size && !checkCollision(nuevaX + 5, nuevaY)) {
      nuevaX = square.x + 5;
    }
  }

  if (keyIsDown(32) && !square.isJumping) {
    square.ySpeed = -10;
    square.isJumping = true;
  }

  square.ySpeed += square.gravity;
  nuevaY += square.ySpeed;

  if (nuevaY >= 350) {
    nuevaY = 350;
    square.ySpeed = 0;
    square.isJumping = false;
  }

  if (checkCollision(nuevaX, nuevaY)) {
    nuevaY = obstacle.y - square.size;
    square.ySpeed = 0;
    square.isJumping = false;
  }

  square.x = nuevaX;
  square.y = nuevaY;
}

function checkCollision(x, y) {
  if (
    x < obstacle.x + obstacle.width &&
    x + square.size > obstacle.x &&
    y < obstacle.y + obstacle.height &&
    y + square.size > obstacle.y
  ) {
    return true;
  }
  return false;
}

