// start button

// SUCCESSFULLY DEBUGGED الحمدلله !!!! ✅

const start_button = document.getElementById("start");

// 'question' in source code
const instruction = document.getElementById("instruction");

const answer_input = document.getElementById("answer");

const submit_button = document.getElementById("submit");

const result = document.getElementById("result");

// 🚨 🪲Cannot use const score 0 ! or else wont' work
// const score = 0;

// Strangely enough, var will work
var score = 0;

const question_array = [
  { question: "2+2 ?", answer: "4" },
  { question: "2 x 8 ?", answer: "16" },
];

var currentQuestionIndex = 0;

// 🪲 🚨 doesn't work when here ??
// start_button.addEventListener("click", start_Game());

const start_Game = () => {
  // hide start button
  start_button.style.display = "none";
  // show question and answer elements
  instruction.style.display = "block";
  answer_input.style.display = "block";
  submit_button.style.display = "block";
  // set the question text
  instruction.innerHTML = question_array[currentQuestionIndex].question;
  submit_button.addEventListener("click", check_Answer);
  // add event listere to sumbit to check answer
  // submit_button.addEventListener("click", check_Answer);

  // BUG ➡🚨 🪲  // submit_button.addEventListener = question_array[currentQuestionIndex].answer;
};

start_button.addEventListener("click", start_Game);

// 🪲 🚨 WARNING , WHEN YOU "ACTIVATE" the function using (), it goes off automatically

// // 🪲 🚨 Why would you re-run the function recursiviely? It' won't move to the next step.
// start_button.addEventListener("click", start_Game);

// runs it right away

check_Answer = () => {
  // //  🚨 🪲 Cannot reassign user_answer >➡change to var works somehow?
  // const user_answer = answer_input.value;
  var user_answer = answer_input.value;

  if (user_answer == question_array[currentQuestionIndex].answer) {
    score++;
    result.innerHTML = `Your answer ${user_answer} is correct ! and your score is ${score}`;
  } else {
    result.innerHTML = `Your answer ${user_answer} is incorrect, focus on the next one! The correct answer is ${question_array[currentQuestionIndex].answer}`;
  }

  answer_input.value = "";
  currentQuestionIndex++;

  if (currentQuestionIndex < question_array.length) {
    instruction.innerHTML = question_array[currentQuestionIndex].question;
  } else {
    instruction.innerHTML = "Game over, your final score is ${score}";

    answer_input.style.display = "none";
    submit_button.style.display = "none";
  }
};

// checkAnswer = () => {
//   console.log("test print");
// };

// console.log(checkAnswer());

// const checkAnswer = "hello it worked";

func = () => {
  document.querySelector("#test-section").innerHTML =
    "✅ YES MY TEST BUTTON WORKED !";
};

test_button.addEventListener("click", func);
