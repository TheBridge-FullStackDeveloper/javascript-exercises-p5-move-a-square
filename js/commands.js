function keyPressed() {
  const keyPressed = key.toLowerCase();

  if (keyPressed === 'a' || keyCode === 37) {
    if (x >= 25) {
      x -= speedMove;
    }d
  } else if (keyPressed === 'd' || keyCode === 39) {
    if (x <= width - 75) {
      x += speedMove;
    }
  } else if (keyPressed === 'w' || keyCode === 38) {
    if (y >= 25) {
      y -= speedMove;
    }
  } else if (keyPressed === 's' || keyCode === 40) {
    if (y <= height - 75) {
      y += speedMove;
    }
  }
}

/*/ CODIGO PARA QUE SE MUEVA DEJANDO PULSADO ENCONTRADO Y MODIFICADO A MI SCRIPT
  background(220);
  fill(255, 0, 0);
  rect(x, y, 50, 50);

  
  if (keyIsDown(65) || keyIsDown(97)) { 
    if (x >= 25) {
      x -= speedMove;
    }
  }
  if (keyIsDown(68) || keyIsDown(100)) {
    if (x <= width - 75) {
      x += speedMove;
    }
  }
  if (keyIsDown(87) || keyIsDown(119)) {
    if (y >= 25) {
      y -= speedMove;
    }
  }
  if (keyIsDown(83) || keyIsDown(115)) {
    if (y <= height - 75) {
      y += speedMove;
    }
  }
}
Entiendo que los numero de los kesIsDown son el valor de la teclas Mayus i minusculas
y el keyIsDown es un atajo del P5 que hace que si esta pulsado es true entonces se mueve y al soltar es false y no modifica X o Y y se para


*/