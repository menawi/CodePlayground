// Get the ball element
const ball = document.querySelector(".ball");

// Set the initial position of the ball
let x = 0;
let y = 0;

// Set the speed of the animation
let xSpeed = 5;
let ySpeed = 5;

// Get the width and height of the screen
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Create a function to update the position of the ball
function updatePosition() {
  x += xSpeed;
  y += ySpeed;

  // Check if the ball has reached the edge of the screen
  if (x + 50 > screenWidth || x < 0) {
    xSpeed = -xSpeed;
  }
  if (y + 50 > screenHeight || y < 0) {
    ySpeed = -ySpeed;
  }

  ball.style.left = x + "px";
  ball.style.top = y + "px";
}

setInterval(updatePosition, 10);

// 📌


// 💡 on click , increase speed
// 💡 on click other button, reduce speed

