// falling ball 3.js

// tried adding a border but it didn't work.. BALL KEEEP GOING OUT OF BOUNDS BEFORE BOUNCE BACK
// 📍only the left bounds are obeeyed in collision


//  ball
let ball = document.getElementById("ball");
// button
let btn = document.getElementById("start");
let arena = document.getElementById("arena");

// starting position
let x = 0;
let y = 0;

// speed
let xspeed = 50;
let yspeed = 50;

let gameRunning = false;
let intervalId;

function gameStart() {
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  // ball.style.right = x + "px"
  // ball.style.bottom = y + "px";

  x += xspeed;
  y += yspeed;

  x + 50 >= arena.offsetWidth || x <0? (xspeed = -xspeed) : xspeed;
  y + 50 >= arena.offsetHeight || y<0 ? (yspeed = -yspeed) : yspeed;

  // x + 50 > arena.offsetWidth || x < 0 ? (xspeed = -xspeed) : xspeed;
  // y + 50 > arena.offsetHeight  || y < 0 ? (yspeed = -yspeed) : yspeed;

  // let arenaRect = arena.getBoundingClientRect()
  // x + 50 > arenaRect.width || x < 0 ? (xspeed = -xspeed) : xspeed;
  // y + 50 > arenaRect.height  || y < 0 ? (yspeed = -yspeed) : yspeed;

  //   x + 50 > window.innerWidth || x < 0 ? (xspeed = -xspeed) : xspeed;
  //   y + 50 > window.innerHeight || y < 0 ? (yspeed = -yspeed) : yspeed;
}

// let btn = document.getElementById("startStopBtn");
btn.addEventListener("click", function () {
  if (!gameRunning) {
    gameRunning = true;
    intervalId = setInterval(gameStart, 120);
  } else {
    gameRunning = false;
    clearInterval(intervalId);
  }
});
