// fallingBall.js

// ball

let bal = document.getElementById("bal");
let scor = document.getElementById("scr");
let tim = document.getElementById("tim");
let btn = document.getElementById( 'start' )

let x_init = 0;
let y_init = 0;

let x_spd = 50;
let y_spd = 50;



// gameStart();

// function gameStart() {
//   bal.style.left = x_init + "px";
//   bal.style.top = y_init + "px";
//   x_init += x_spd;
//   y_init += y_spd;

//   x_init + 50 > window.innerWidth || x_init < 0 ? (x_spd = -x_spd) : x_spd;

//   y_init + 50 > window.innerHeight || y_init < 0 ? (y_spd = -y_spd) : y_spd;

//   setTimeout(gameStart, 120);
// }
// btn.addEventListener('click', gameStart )



// function gameStart() {
//   bal.style.left = x_init + "px";
//   bal.style.top = y_init + "px";
//   x_init += x_spd;
//   y_init += y_spd;

//   x_init + 50 > window.innerWidth || x_init < 0 ? (x_spd = -x_spd) : x_spd;

//   y_init + 50 > window.innerHeight || y_init < 0 ? (y_spd = -y_spd) : y_spd;

//   setTimeout(gameStart, 120);
// }
// btn.addEventListener('click', gameStart )

let gameRunning = false

function gameStart() {
if (!gameRunning) {
  return
}

  bal.style.left = x_init + "px";
  bal.style.top = y_init + "px";
  x_init += x_spd;
  y_init += y_spd;

  x_init + 50 > window.innerWidth || x_init < 0 ? (x_spd = -x_spd) : x_spd;

  y_init + 50 > window.innerHeight || y_init < 0 ? (y_spd = -y_spd) : y_spd;

  setTimeout(gameStart, 120)

}
// btn.addEventListener('click', gameStart )
// btn.addEventListener('click', function() {
//   if (!gameRunning) {
//     gameRunning = true;
//     gameStart();
//   } else {
//     gameRunning = false;
//   }
// });

btn.addEventListener('click', () => {
  if (!gameRunning) {
    gameRunning = true
    gameStart()
  }
  gameRunning = false
})