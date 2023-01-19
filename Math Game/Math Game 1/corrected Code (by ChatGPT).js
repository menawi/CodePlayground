// corrected Code (by ChatGPT)
const start_button = document.getElementById("start");
const instruction = document.getElementById("instruction");
const answer_input = document.getElementById("answer");
const submit_button = document.getElementById("submit");
const result = document.getElementById("result");
let score = 0;
const question_array = [
  { question: "2+2 ?", answer: 4 },
  { question: "2 x 8 ?", answer: 16 },
];
const currentQuestionIndex = 0;
const start_Game = () => {
  start_button.style.display = "none";
  instruction.style.display = "block";
  answer_input.style.display = "block";
  submit_button.style.display = "block";
  instruction.innerHTML = question_array[currentQuestionIndex].question;
  submit_button.addEventListener("click", check_Answer);
};
start_button.addEventListener("click", start_Game);

const check_Answer = () => {
  const user_answer = answer_input.value;

  if (user_answer == question_array[currentQuestionIndex].answer) {
    score++;
    result.innerHTML = `Correct! Your score is ${score}`;
  } else {
    result.innerHTML = `Your answer ${user_answer} is incorrect, the correct answer is ${question_array[currentQuestionIndex].answer}`;
  }

  answer_input.value = "";
  currentQuestionIndex++;

  if (currentQuestionIndex < question_array.length) {
    instruction.innerHTML = question_array[currentQuestionIndex].question;
  } else {
    instruction.innerHTML = "Game over, try again next time :) ";
    answer_input.style.display = "none";
    submit_button.style.display = "none";
  }
};
