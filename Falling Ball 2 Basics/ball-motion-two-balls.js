let container = document.getElementById("container");

let ball = document.getElementById("ball");
let ball2 = document.getElementById("ball2");

let x = 0;
let y = 0;
let xSpeed = 5;
let ySpeed = 7;

let x2 = 0;
let y2 = 0;
let xSpeed2 = 4;
let ySpeed2 = 7;


function animate() {
    ball.style.left = x + "px";
    ball.style.top = y + "px";
    x += xSpeed;
    y += ySpeed;
  
    ball2.style.left = x2 + "px";
    ball2.style.top = y2 + "px";
    x2 += xSpeed2;
    y2 += ySpeed2;
  
    // Check for collision between the two balls
    let dx = x2 - x;
    let dy = y2 - y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    
    // if (checkCollision(ball, ball2)) {
    //     let xSpeedChange = xSpeed - xSpeed2;
    //     let ySpeedChange = ySpeed - ySpeed2;
    //     xSpeed -= xSpeedChange * 0.1;
    //     ySpeed -= ySpeedChange * 0.1;
    //     xSpeed2 += xSpeedChange * 0.1;
    //     ySpeed2 += ySpeedChange * 0.1;
    //   }
      

    if (distance < 100) {
      let angle = Math.atan2(dy, dx);
      let targetX = x + Math.cos(angle) * 100;
      let targetY = y + Math.sin(angle) * 100;
      let ax = (targetX - x2) * 0.01;
      let ay = (targetY - y2) * 0.1;
      xSpeed -= ax;
      ySpeed -= ay;
      xSpeed2 += ax;
      ySpeed2 += ay;
    }
  
    // Check for ball hitting the walls
    if (x + 50 > container.clientWidth || x < 0) {
      xSpeed = -xSpeed * 0.99;
    }
    if (y + 50 > container.clientHeight || y < 0) {
      ySpeed = -ySpeed *0.99;
    }
    if (x2 + 50 > container.clientWidth || x2 < 0) {
      xSpeed2 = -xSpeed2 *0.99;
    }
    if (y2 + 50 > container.clientHeight || y2 < 0) {
      ySpeed2 = -ySpeed2 *0.99;
    }
  
    setTimeout(animate, 16);
    // ball.style.left = x + "px";
    // ball.style.top = y + "px";
    // x += xSpeed;
    // y += ySpeed;

    // ball2.style.left = x2 + "px";
    // ball2.style.top = y2 + "px";
    // x2 += xSpeed2;
    // y2 += ySpeed2;

    
    // if (x + 50 > container.clientWidth || x < 0) {
    //   xSpeed = -xSpeed;
    // }
    // if (y + 50 > container.clientHeight || y < 0) {
    //   ySpeed = -ySpeed;
    // }
    // if (x2 + 50 > container.clientWidth || x2 < 0) {
    //     xSpeed2 = -xSpeed2;
    //   }
    //   if (y2 + 50 > container.clientHeight || y2 < 0) {
    //     ySpeed2 = -ySpeed2;
    //   }

    //   let dx = x2 - x;
    //   let dy = y2 - y;
    //   let distance = Math.sqrt(dx * dx + dy * dy);
    
    //   if (distance < 100) {
    //     let angle = Math.atan2(dy, dx);
    //     let targetX = x + Math.cos(angle) * 100;
    //     let targetY = y + Math.sin(angle) * 100;
    //     let ax = (targetX - x2) * 0.1;
    //     let ay = (targetY - y2) * 0.1;
    //     xSpeed -= ax;
    //     ySpeed -= ay;
    //     xSpeed2 += ax;
    //     ySpeed2 += ay;
    //   }
      

    // setTimeout(animate, 16);
  }
//   
  animate()