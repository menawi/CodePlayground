// game.js

  // Get the player element
  const player = document.querySelector(".player");

  // Set the initial position of the player
  let playerX = 0;
  let playerY = 0;

  // Set the speed of the player
  const playerSpeed = 5;

  // Get the width and height of the screen
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Create an array to store the obstacles
  let obstacles = [];

  // Create a function to generate a new obstacle
  function generateObstacle() {
      // Create a new div element to serve as the obstacle
      const obstacle = document.createElement("div");
      obstacle.classList.add("obstacle");

      // Generate a random x and y position for the obstacle
      const x = Math.random() * (screenWidth - 50);
      const y = Math.random() * (screenHeight - 50);
      obstacle.style.left = x + "px";
      obstacle.style.top = y + "px";

      // Add the obstacle to the obstacles array
      obstacles.push(obstacle);

      // Add the obstacle to the page
      document.body.appendChild(obstacle);
  }

  // Use setInterval to call the generateObstacle function every 1000 milliseconds
  setInterval(generateObstacle, 1000);

  // Listen for keyboard events to move the player
  document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
          playerX -= playerSpeed;
      } else if (event.key === "ArrowRight") {
          playerX += playerSpeed;
      } else if (event.key === "ArrowUp") {
          playerY -= playerSpeed;
      } else if (event.key === "ArrowDown") {
          playerY += playerSpeed;
      }
  })
