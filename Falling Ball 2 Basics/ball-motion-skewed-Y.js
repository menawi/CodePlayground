let container = document.getElementById("container");
let ball = document.getElementById("ball");
let x = 0;
let y = 0;
let xSpeed = 10;
let ySpeed = 1;

function animate() {
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  x += xSpeed;
  y += ySpeed;

  if (x + 50 > container.clientWidth || x < 0) {
    xSpeed = -xSpeed;
  }
  if (y + 50 > container.clientHeight || y < 0) {
    ySpeed = -ySpeed + 1; // increase ySpeed by 1 each time it bounces
  }
  if (y + 50 > container.clientHeight) {
    ySpeed = -ySpeed * 0.9;
  }

  setTimeout(animate, 10);
}

animate();
