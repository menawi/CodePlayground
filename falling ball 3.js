// falling ball 3.js

let gameRunning = false;
let intervalId = null;

function gameStart() {
  bal.style.left = x_init + "px";
  bal.style.top = y_init + "px";
  x_init += x_spd;
  y_init += y_spd;

  x_init + 50 > window.innerWidth || x_init < 0 ? (x_spd = -x_spd) : x_spd;

  y_init + 50 > window.innerHeight || y_init < 0 ? (y_spd = -y_spd) : y_spd;
}

let btn = document.getElementById("startStopBtn");
btn.addEventListener('click', function() {
  if (!gameRunning) {
    gameRunning = true;
    intervalId = setInterval(gameStart, 120);
  } else {
    gameRunning = false;
    clearInterval(intervalId);
  }
});
