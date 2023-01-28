
## Ball

```css

   #bal {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: red;
      }

```

```javascript
let x_init = 0;
let y_init = 0;

let x_spd = 50;
let y_spd = 50;

let clik = 0;
let totalTim = 120;
let timLef = totalTim;

gameStart();

function gameStart() {
  bal.style.left = x_init + "px";
  bal.style.top = y_init + "px";
  x_init += x_spd;
  y_init += y_spd;

  x_init + 50 > window.innerWidth || x_init < 0 ? (x_spd = -x_spd) : x_spd;

  y_init + 50 > window.innerHeight || y_init < 0 ? (y_spd = -y_spd) : y_spd;

  setTimeout(gameStart, 120);
}

```

? Why the + "px" , isn't that a string ?

