let x = 200;
let y = 200;
let width = 50;
let height = 50;

function setup() {
  createCanvas(400, 400);
  background(200); //Color gris para el fondo
  fill(255, 0, 0); //Dar color rojo al círculo
  rect(x, y, width, height); //Creación de mi rectángulo
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    //disminuye la posición x
    x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    //aumenta la posición x
    x += 10;
  } else if (keyCode === UP_ARROW) {
    //disminuye la posición y
    y -= 10;
  } else if (keyCode === DOWN_ARROW) {
    //aumenta la posición y
    y += 10;
  }
}

function draw() {
  background(200); //This is necessary because it erases the previous frame's content, preventing it from accumulating on the canvas.
  rect(x, y, width, height); // Redraw the rectangle at the updated position
}
