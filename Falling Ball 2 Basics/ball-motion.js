let container = document.getElementById("container");
let ball = document.getElementById("ball");
let x = 0;
let y = 0;
let xSpeed = 5;
let ySpeed = 5;

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

//   animate()
  //   requestAnimationFrame(animate);

  setTimeout(animate, 16);
}


animate()

// 📍
// let animation = setInterval(function() {
//     animate();
//   }, 16); // 16 milliseconds is approximately 60 frames per second

// 📍
//  // using setTimeout
//   function animateWithTimeout() {
//     animate();
//     setTimeout(animateWithTimeout, 16);
//   }
//   animateWithTimeout();

// 📍timer
// let startTime = new Date();
// let intervalId = setInterval(function () {
//   let currentTime = new Date();
//   let elapsedTime = (currentTime - startTime) / 1000; // convert to seconds
//   console.log("Interval running: " + elapsedTime + " seconds");
//   if (elapsedTime >= 120) {
//     // 2 minutes in seconds
//     clearInterval(intervalId);
//   }
// }, 1000);

