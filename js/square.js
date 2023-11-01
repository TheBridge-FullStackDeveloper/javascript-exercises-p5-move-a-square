class Square {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.side = side;
    this.ySpeed = 0;
    this.gravity = 0.2;
    this.xSpeed = 0;
  }

  collide(object) {
    return (
      this.x < object.x + object.width + 5 &&
      this.x + this.side > object.x - 5 &&
      this.y < object.y + object.height &&
      this.y + this.side > object.y
    );
  }

  move() {
    this.ySpeed += this.gravity;
    this.y += this.ySpeed;
    this.x += this.xSpeed;
    

    if (keyIsDown(LEFT_ARROW)) {
      if (this.x - 5 >= 0) {
        if (!this.collide(obstacle)) {
          this.x -= 5;
        } else if (
          this.collide(obstacle) &&
          this.x <= obstacle.x + obstacle.width
        ) {
          this.x -= 5;
        }
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      if (this.x + this.side + 5 <= canvasSize.width) {
        if (!this.collide(obstacle)) {
          this.x += 5;
        } else if (this.collide(obstacle) && this.x >= obstacle.x) {
          this.x += 5;
        }
      }
    }

    if (this.collide(obstacle) && this.y < obstacle.y) {
      this.y = obstacle.y - this.side;
      this.ySpeed = 0;
      
    }

    if (this.y + this.side >= canvasSize.height) {
      this.y = canvasSize.height - this.side;
      this.ySpeed = 0;
    }
    if (keyIsDown(32) && this.ySpeed === 0) {
      this.ySpeed = -10;
    }
  }

  draw() {
    square(this.x, this.y, this.side);
  }
}
