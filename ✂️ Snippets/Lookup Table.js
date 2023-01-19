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

// 📍 Lookup table
// Notice it is an object with arrow functions inside
// Contain the actions associated with each of the lookup keys
const operatorFunctions = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

// 📍 result
let result = operatorFunctions[select_randIteration_fromOperators](x, y);

function genQuestion() {
  let question_message = `What is ${x} ${select_randIteration_fromOperators} ${y} ? `;
  return question_message;
}
console.log(genQuestion());

// 🚨
// add a variable to 'hold' the message result
// add either return or log
// when you log outside the func, make sure to add the () next to func name
