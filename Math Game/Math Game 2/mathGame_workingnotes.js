// workingnotes.js;
console.log("test print");

// 📍TEXT
// question_text
// answer_text

// 📍PROMPTS
// questions_math

// 📍INPUT
// input_text

// 📍 BUTTONS

// start_button
// submit_buttons

// 📍SCORE
// score_text

// ------------

// UNDERSTAND THIS

function generateMathQuestion() {
  // Create an array of possible operators
  var operators = ["+", "-", "*", "/"];
  // Select a random operator
  var operator = operators[Math.floor(Math.random() * operators.length)];
  // Select two random numbers
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  // Calculate the answer
  var answer;
  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
  }
  // Build the question object
  var question = {
    question: num1 + " " + operator + " " + num2 + " = ?",
    answer: answer,
  };
}

// 📍 The Operators
const operators = ["+", "-", "*", "/"];

// 📍 The Random number to use as the iteration for the Operators array
const randIteration_fromOperators = Math.floor(
  Math.random() * operators.length
);
// 📍Select a random iteration from the operators array
const select_randIteration_fromOperators =
  operators[randIteration_fromOperators];

// 📍 The Numbers to use in the questions
const x = Math.floor(Math.random() * 10);
const y = Math.floor(Math.random() * 10);

const operatorFunctions = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

// function genQuestion() {

// }

let result = operatorFunctions[select_randIteration_fromOperators](x, y);

// console.log(operatorFunctions[0]);

// console.log(operatorFunctions[select_randIteration_fromOperators](x, y));

function genQuestion() {
  let question_message = `What is ${x} ${select_randIteration_fromOperators} ${y} ? `;
  return question_message;
}
console.log(genQuestion());

// 🚨
// add a variable to 'hold' the message result
// add either return or log
// when you log outside the func, make sure to add the () next to func name

// console.log(result);

// 💡 You can combine both the operator and its function !

// const operator_action =
// console.log(operator_action[0]["+"]);

// This way, you don't need a switch statement. The operatorFunctions object is used as a lookup table to find the appropriate function for the operator and then the function is called with x and y as arguments.
