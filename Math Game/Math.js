// // Get the start button
// var startButton = document.getElementById("start-button");
// // Get the question element
// var question = document.getElementById("question");
// // Get the answer input
// var answer = document.getElementById("answer");
// // Get the submit button
// var submitButton = document.getElementById("submit-button");
// // Get the result element
// var result = document.getElementById("result");
// // Create a variable to keep track of the score
// var score = 0;
// // Create an array of questions
// var questions = [
//   { question: "What is 5 + 2?", answer: 7 },
//   { question: "What is 6 * 3?", answer: 18 },
//   { question: "What is 8 / 2?", answer: 4 },
//   { question: "What is 10 - 5?", answer: 5 },
//   { question: "What is 2^3?", answer: 8 },
// ];
// // Create a variable to keep track of the current question index
// var currentQuestionIndex = 0;

// // Add an event listener to the start button to start the game
// startButton.addEventListener("click", startGame);

// function startGame() {
//   // Hide the start button
//   startButton.style.display = "none";
//   // Show the question and answer elements
//   question.style.display = "block";
//   answer.style.display = "block";
//   submitButton.style.display = "block";
//   // Set the question text
//   question.innerHTML = questions[currentQuestionIndex].question;
//   // Add an event listener to the submit button to check the answer
//   submitButton.addEventListener("click", checkAnswer);
// }

// // console.log(questions[currentQuestionIndex].question);

// // 📍
// // array[index].index category and value

// //   📌
// // console.log('test')

// function checkAnswer() {
//   // Get the value of the answer input
//   var userAnswer = answer.value();
//   // Compare the user's answer to the correct answer
//   if (userAnswer == questions[currentQuestionIndex].answer) {
//     // If the answer is correct, add 1 to the score
//     score++;
//     // Show a message indicating the answer is correct
//     result.innerHTML = "Correct! Your score is " + score;
//   } else {
//     //
//     // If the answer is incorrect, show a message indicating the answer is incorrect
//     result.innerHTML = "Incorrect. The correct answer is " + questions[currentQuestionIndex].answer + ". Your score is " + score;
//   }
//   // Clear the answer input
//   answer.value = "";
//   // Go to the next question 📌
//   currentQuestionIndex++;
//   // Check if there are more questions
//   if (currentQuestionIndex < questions.length) {
//     // If there are more questions, set the question text
//     question.innerHTML = questions[currentQuestionIndex].question;
//   } else {
//     // If there are no more questions, show a message indicating the game is over and the final score
//     question.innerHTML = "Game over! Your final score is " + score + " out of " + questions.length;
//     // Hide the answer input and submit button
//     answer.style.display = "none";
//     submitButton.style.display = "none";
//   }
// }
