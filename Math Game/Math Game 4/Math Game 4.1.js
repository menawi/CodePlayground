// document.querySelector('h1').innerHTML = 'test'
const test_element = document.querySelector('h1')
const ques = document.getElementById('ques')
const input = document.getElementById('input')
const res = document.getElementById('res')
const start = document.getElementById('start')
const submit = document.getElementById('submit')
const operators = ["+", "-"]
const operator_function = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y
}
const genNumbers = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// const test_button = document.getElementById('test')
// test_button.addEventListener('click', () => test_element.innerHTML = genNumbers(1, 2))

start.addEventListener('click', StartGame)


function StartGame() {
  start.style.display = 'none'
  let n1 = genNumbers(10, 5)
  let n2 = genNumbers(5, 1)
  let selectOperator = operators[Math.floor(Math.random() * operators.length)]
  let math_ans = operator_function[selectOperator](n1, n2)
  ques.innerHTML = `What is ${n1} ${selectOperator} ${n2} ?`

  submit.addEventListener('click', checkAnswer)

  function checkAnswer() {
    input.value == math_ans ?
      ques.innerHTML =
      'Yes, that is correct!' :
      ques.innerHTML = 'Incorrect'
    setTimeout(
      () => { start.style.display = 'block', start.innerHTML = 'Play again?' }, 2000
    )
  }

}
