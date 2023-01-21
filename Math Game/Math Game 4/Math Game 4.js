// // Math Game 4.js
// console.log("test");

// const question = document.getElementById("question");

// const answer_inpt = document.getElementById("answer-input");

// const start_button = document.getElementById("start-button")

// const submit_button = document.getElementById("submit");
// // submit_button.addEventListener

// // button.addEventListener('click', ()=> element.innerHTML = 'result')

// // --- MATH

// // used to generate random numbers between a range
// function genNum(max, min) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// // numbers
// const num_larg = genNum(10, 0);
// const num_smal = genNum(9, 0);

// // only 2 operators for this demo
// const operators = ["+", "-"];

// // operator lookup table
// const operatorFunctionTable = {
//   "+": (x, y) => x + y,
//   "-": (x, y) => x - y
// }

// // gen either 0 or 1 and selects the appropriate iterator from operators array
// const selectRandOperator = operators[Math.floor(Math.random() * operators.length)]

// // const generateQuestions = () => {
// //   let question_text = `what is ${num_larg} ${selectRandOperator} ${num_smal} ?`
// //   let answer_math = operatorFunctionTable[selectRandOperator](num_larg, num_smal)
// // }

// start_button.addEventListener('click', gameStart)

// // function generate_Questions() {
// //   let question_text = `what is ${num_larg} ${selectRandOperator} ${num_smal} ?`
// //   let answer_math = operatorFunctionTable[selectRandOperator](num_larg, num_smal)
// //   question.innerHTML = question_text
// //   submit_button.addEventListener('click', checkGameAnswer(ans))
// // }

// function gameStart() {
//   let question_text = `what is ${num_larg} ${selectRandOperator} ${num_smal} ?`
//   question.innerHTML = question_text
//   submit_button.addEventListener('click', checkGameAnswer)



//   function checkGameAnswer() {
//     let answer_math = operatorFunctionTable[selectRandOperator](num_larg, num_smal)
//     answer_inpt.value == answer_math ?
//       question.innerHTML = 'Correct!' :
//       question.innerHTML = 'Incorrect.'
//     setTimeout(() => {
//       gameStart()
//     }, 1000)
//   }


// }

// // console.log(generateQuestions()) 
