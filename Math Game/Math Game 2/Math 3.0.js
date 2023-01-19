// Math 3.0.js

// chatGPT
// Not as elegant as chatGPT Math 4.0

const operators = ["+", "-", "*", "/"];
const operatorFunctions = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

const generateNum = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

let currentQuestion = {};

function generateQuestion() {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = generateNum(10, 1);
  const num2 = generateNum(10, 1);
  currentQuestion = {
    question: `What is ${num1} ${operator} ${num2}?`,
    answer: operatorFunctions[operator](num1, num2),
  };
  return currentQuestion.question;
}

function checkAnswer() {
  const userInput = document.getElementById("answer").value;
  if (userInput == currentQuestion.answer) {
    return "Correct!";
  } else {
    return "Incorrect";
  }
}

document.getElementById("question").innerHTML = generateQuestion();
document.getElementById("submit-button").addEventListener("click", () => {
  document.getElementById("result").innerHTML = checkAnswer();
});
