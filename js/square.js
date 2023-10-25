let x, y;
const speedMove = 5;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);
  fill(255, 0, 0);
  rect(x, y, 50, 50);
}

