// MathGame_2.0_Functions.js

// Don't use the "/" operator >>> avoid the 0.6 and 'infinity'

// 📌 CONSTANTS

const operators = ["+", "-", "*", "/"];
const random_iteration = Math.floor(Math.random() * operators.length);
const selectOperator = operators[random_iteration];
const generateNum = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const larger_num = generateNum(10, 5);
const smaller_num = generateNum(5, 1);
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

// console.log(genQuestion.question_text);
// console.log(genQuestion.answer_math);

start_button.addEventListener("click", startGame);

function startGame() {
  question.innerHTML = genQuestion.question_text;
  submit_button.addEventListener("click", checkAnswer());
}

function checkAnswer() {
  let usr = user_input.value;
  let ans = genQuestion.answer_math;
  if (usr == ans) {
    return "true";
  } else {
    ("false");
  }
  // if (user_input.value == genQuestion.answer_math) {
  //   return "correct";
  // } else {
  //   return "not";
  // }
}

// function testSubButton() {
//   question.innerHTML = "test";
// }

// submit_button.addEventListener("click", testSubButton);

// function startGame() {
//   let correctAnwer = genQuestion.answer_math;
//   question.innerHTML = genQuestion.question_text;
//   submit_button.addEventListener("click", checkAnswer());
//   function checkAnswer() {
//     if (user_input == correctAnwer) {
//       return "correct";
//     } else {
//       ("false");
//     }
//   }
// }

// // start_button.addEventListener("click", startGame);

// // function startGame() {
// //   question.innerHTML = genQuestion.question_text;
// //   // answer_math = genQuestion.answer_math;
// //   // if (user_input == answer_math) {
// //   //   ("That is correct !");
// //   // } else {
// //   //   ("Sorry, that is incorrect.");
// //   // }
// //   submit_button.addEventListener("click", checkAnswer);
// // }

// // function checkAnswer() {
// //   let useranswer = parseInt(user_input.value);
// //   if (useranswer == genQuestion.answer_math) {
// //     return "That is correct !";
// //   } else {
// //     return "Sorry, that is incorrect.";
// //   }
// // }

// // submit_button.addEventListener("click", checkAnswer);

// // const correct

// // console.log(larger_num);
// // console.log(smaller_num);

// // function generateQuestion() {
// //   startButton.style.display = "none";
// //   //
// //   let question_Text = `Calculate the value of ${larger_num} ${selectOperator} ${smaller_num}`;
// //   let correctAnswer_Math = operatorFunctions[selectOperator](
// //     larger_num,
// //     smaller_num
// //   );
// //   question.innerHTML = question_Text;
// //   submitButton.addEventListener("click", checkUserAnswer);
// // }

// // function checkUserAnswer() {
// //   let userAnswer_input = answer.value;
// //   if (userAnswer_input == correctAnswer_Math) {

// //   } else {

// //   }
// // }
// // let answer_Math = operatorFunctions[selectOperator](larger_num, smaller_num);
// // console.log(answer_Math);

// // let message = `Calculate the value of ${larger_num} ${selectOperator} ${smaller_num}`;
// // console.log(message);

// // function that() {
// //   let math_question = `What is ${number_one} ${selectOperator} ${number_two}`;
// //   let math_result = operatorFunctions[select_randIteration_fromOperators](x, y);
// //   let user_input = answer.value;

// //   if (user_input == math_result) {
// //     result.innerHTML = " Correct ! ";
// //   } else {
// //     ("Incorrect");
// //   }
// // }
