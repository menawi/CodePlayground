      // Get the ball element
      var ball = document.getElementById("ball");
      var score = document.getElementById("score");
      var time = document.getElementById("time");
      
      // Initial position of the ball
      var x = 0;
      var y = 0;
      
      // Speed of the ball
      var xSpeed = 5;
      var ySpeed = 5;
      
      // Score and time variables
      var clicks = 0;
      var totalTime = 30; // in seconds
      var timeLeft = totalTime;
      
      // Start the game
      game();
      
      function game() {
        // Set the initial position of the ball
        ball.style.left = x + "px";
        ball.style.top = y + "px";
        
        // Update the score
        score.innerHTML = "Score: " + clicks;
        
        // Update the time
        time.innerHTML = "Time: " + timeLeft + " seconds";
        
        // Move the ball
        x += xSpeed;
        y += ySpeed;
        
        // Check if the ball hits the edge of the screen
        if (x + 50 > window.innerWidth || x < 0) {
          xSpeed = -xSpeed;
        }
        if (y + 50 > window.innerHeight || y < 0) {
          ySpeed = -ySpeed;
        }
        
        // Check if time is up
        if (timeLeft <= 0) {
          alert("Time's up! Your final score is: " + clicks);
          return;
        }
        
        // Decrement time left
        timeLeft--;
        
        // Repeat the game loop
        setTimeout(game, 1000);
      }
      
      // Add an event listener for clicking the ball
      ball.addEventListener("click", function() {
        clicks++;
      });