const question = document.getElementById("question");
const answer = document.getElementById("answer");
const result = document.getElementById("result");
const start_button = document.getElementById("start-button");
const submit_button = document.getElementById("submit-button");

const operators = ["+", "-", "/", "*"];
const selectOperator = operators[Math.floor(Math.random() * operators.length)];
const generateNum = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const larger_num = generateNum(10, 5);
const smaller_num = generateNum(5, 0);
const operatorFunctions = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};
const genQuestion = {
  question_text: `Calculate the value of ${larger_num} ${selectOperator} ${smaller_num}`,
  answer_math: operatorFunctions[selectOperator](larger_num, smaller_num),
};
const user_input = document.getElementById("answer");

start_button.addEventListener("click", startGame);

function startGame() {
  question.innerHTML = genQuestion.question_text;
  submit_button.addEventListener("click", checkAnswer);
}

function checkAnswer() {
  if (user_input.value == genQuestion.answer_math) {
    question.innerHTML = "correct";
  } else {
    question.innerHTML = "incorrect";
  }
  setTimeout(() => {
    question.style.color = "red";
    question.innerHTML = "Get ready for the next question ! ";
  }, 2000);

  setTimeout(() => {
    location.reload();
  }, 5000);
}
