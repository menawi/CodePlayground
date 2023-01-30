let container = document.getElementById("container");
let ball = document.getElementById("ball");
let x = 0;
let y = 0;
let xSpeed = 5;
let ySpeed = 5;
let timeoutId;

function animate() {
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  x += xSpeed;
  y += ySpeed;

  if (x + 50 > container.clientWidth || x < 0) {
    xSpeed = -xSpeed;
  }
  if (y + 50 > container.clientHeight || y < 0) {
    ySpeed = -ySpeed;
  }
  
  timeoutId = setTimeout(animate, 1000/60);
}

animate();

setTimeout(function() {
  clearTimeout(timeoutId);
}, 120000); // 2 minutes in milliseconds
