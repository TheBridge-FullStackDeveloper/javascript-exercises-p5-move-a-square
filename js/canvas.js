let squareRed;

const obstacle = {
  x: 175,
  y: 325,
  width: 99,
  height: 50,
};

const canvasSize = {
  width: 800,
  height: 400,
};
function setup() {
  createCanvas(canvasSize.width, canvasSize.height);
  squareRed = new Square(0, 0, 50);
}

function draw() {
  background(220);
  fill("red");
  squareRed.draw();
  fill("blue");
  rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  squareRed.move();
}


