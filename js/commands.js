function keyPressed() {
  const keyPressed = key.toLowerCase();

  if (keyPressed === 'a' || keyCode === 37) {
    if (x >= 25) {
      x -= speedMove;
    }
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