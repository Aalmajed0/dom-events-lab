/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const operators = document.querySelectorAll('.button.operator')
const equalsButton = document.querySelector('.button.equals')
const clearButton = document.querySelector('#clear')

/*-------------------------------- Variables --------------------------------*/
let operator = ''
let currentNumber = 0
let previousNumber = 0

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    const clickedNumber = event.target.textContent
    currentNumber = parseFloat(currentNumber + clickedNumber)
    display.innerText = currentNumber
  })
})

operators.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (event) => {
    operator = event.target.textContent
    previousNumber = currentNumber
    currentNumber = 0
  })
})

equalsButton.addEventListener('click', (event) => {
  const result = calResult(previousNumber, currentNumber, operator)
  display.innerText = result
  currentNumber = result
  previousNumber = 0
  operator = ''
})

clearButton.addEventListener('click', () => {
  currentNumber = 0
  previousNumber = 0
  operator = ''
  display.innerText = ''
})

/*-------------------------------- Functions --------------------------------*/

function calResult(previousNumber, currentNumber, operator) {
  if (operator === '+') {
    return previousNumber + currentNumber
  } else if (operator === '-') {
    return previousNumber - currentNumber
  } else if (operator === '*') {
    return previousNumber * currentNumber
  } else if (operator === '/') {
    return previousNumber / currentNumber
  }
}
