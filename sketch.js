let square = {
  x: 0,
  y: 350,
  size: 50,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  fill(0, 255, 0);
  triangle(150, 400, 200, 350, 250, 400);
  fill(255, 0, 0);
  rect(square.x, square.y, square.size, square.size);
  move();
}

function move() {
  let nuevaX = square.x;
  let nuevaY = square.y;

  if (keyIsDown(UP_ARROW)) {
    if (square.y - 5 >= 0) {
      nuevaY = square.y - 5;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (square.y + 5 <= 400 - square.size) {
      nuevaY = square.y + 5;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (square.x - 5 >= 0) {
      nuevaX = square.x - 5;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (square.x + 5 <= 400 - square.size) {
      nuevaX = square.x + 5;
    }
  }

  if (
    nuevaX < 250 &&
    nuevaX + square.size > 150 &&
    nuevaY < 400 &&
    nuevaY + square.size > 350
  ) {
    return;
  }

  square.x = nuevaX;
  square.y = nuevaY;
}
