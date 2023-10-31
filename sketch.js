let x1 = 200;
let y1 = 200;
let width1 = 50;
let height1 = 50;

let x2 = 300;
let y2 = 200;
let width2 = 100;
let height2 = 50;

let speedX = 5;
let speedY = 5;

let canvasWidth = 400;
let canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(200);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    //disminuye la posición x
    x1 -= speedX;
    if (x1 <= 0) {
      console.log("collision");
      speedX *= -1;
    }
  } else if (keyCode === RIGHT_ARROW) {
    //aumenta la posición x
    x1 += speedX;
    if (x1 + width1 >= canvasWidth) {
      console.log("collision");
      speedX *= -1;
    }
  } else if (keyCode === UP_ARROW) {
    //disminuye la posición y
    y1 -= speedY;
    if (y1 <= 0) {
      console.log("collision");
      speedY *= -1;
    }
  } else if (keyCode === DOWN_ARROW) {
    //aumenta la posición y
    y1 += speedY;
    if (y1 + height1 >= canvasHeight) {
      console.log("collision");
      speedY *= -1;
    }
  } else if (keyCode === 32) {
    y1 -= speedY * 10;
  }
}

function isColliding() {
  if (
    x1 < x2 + width2 &&
    x1 + width1 > x2 &&
    y1 < y2 + height2 &&
    y1 + height1 > y2
  ) {
    console.log("Collision with blue rectangle");
  }
}

function draw() {
  background(200); //This is necessary because it erases the previous frame's content, preventing it from accumulating on the canvas.
  isColliding(); // Check for collisions with the blue rectangle
  fill(255, 0, 0);
  rect(x1, y1, width1, height1);
  fill(0, 0, 255);
  rect(x2, y2, width2, height2);
}
