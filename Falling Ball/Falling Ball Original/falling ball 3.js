// falling ball 3.js

//  ball
let ball = document.getElementById("ball");
// button
let btn = document.getElementById( 'start' )

// starting position
let x = 0
let y = 0;

let xspeed = 50;
let yspeed = 50;

let click = 0;
let total_time = 120;
let time_left = total_time;



let gameRunning = false;
let intervalId;

function gameStart() {
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  x += xspeed;
  y += yspeed;

  x + 50 > window.innerWidth || x < 0 ? (xspeed = -xspeed) : xspeed;

  y + 50 > window.innerHeight || y < 0 ? (yspeed = -yspeed) : yspeed;
}

// let btn = document.getElementById("startStopBtn");
btn.addEventListener('click', function() {
  if (!gameRunning) {
    gameRunning = true;
    intervalId = setInterval(gameStart, 120);
  } else {
    gameRunning = false;
    clearInterval(intervalId);
  }
});

