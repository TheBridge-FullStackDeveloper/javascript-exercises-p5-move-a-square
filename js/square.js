let x, y;
const speedMove = 10;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);
  fill(230, 156, 70);
  rect(x, y, 70, 70);
}

