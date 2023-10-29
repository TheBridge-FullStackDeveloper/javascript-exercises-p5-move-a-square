let SquareX = 50; // Posición inicial en el eje X
let SquareY = 50; // Posición inicial en el eje Y
let squareSide = 50; // Tamaño del cuadrado
let xSpeed = 10 // Velocidad en el eje X
let ySpeed = 10; // Velocidad en el eje Y
let canvasWidth = 400; // Ancho del canvas
let canvasHeight = 400; // Alto del canvas

function setup() {
  createCanvas(canvasWidth, canvasHeight); // Crea un lienzo de 400x400 píxeles
}

function draw() {
  background(220); // Establece el fondo del lienzo en gris claro
  fill(255, 0, 0); // Relleno rojo
  rect(SquareX, SquareY, squareSide, squareSide);
  
 

  // Verifica las colisiones con los lados del canvas
  if (SquareX + squareSide > canvasWidth || SquareX < 0) {
    xSpeed === 0; // Cambia la dirección en el eje X al tocar un lado
  }
  if (SquareY + squareSide > canvasHeight || SquareY < 0) {
    ySpeed === 0 // Cambia la dirección en el eje Y al tocar la parte superior o inferior
  }
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        SquareX -= xSpeed;
    } else if (keyCode === RIGHT_ARROW) {
        SquareX += xSpeed;
    } else if (keyCode === UP_ARROW) {
        SquareY -= ySpeed;
    } else if (keyCode === DOWN_ARROW) {
        SquareY += ySpeed;
    }
}
