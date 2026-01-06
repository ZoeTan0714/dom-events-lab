/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


const buttons = document.querySelectorAll ('.button')

buttons.forEach ((button) => {
    button.addEventListener ('click', (event) => {
    console.log (event.target.innerText)})
    });


const calculator = document.querySelector ('#calculator')
let firstNumber = null;
let secondNumber = null;
let operator = null;

// define the operation first 
calculator.addEventListener('click', (event) => {
  console.log(event.target.innerText);
  if (event.target.classList.contains('number')) {
    handleNumber (event.target.innerText)
  };
  if (event.target.classList.contains('operator')) {
    handleOperator (event.target.innerText)
  };
  if (event.target.innerText === 'equals') {
    handleEquals ()
  };
  if (event.target.innerText === 'clear') {
    handleClear ()
  };
});

// handle  the number (become string)
function handleNumber (num) {
  if (operator === null) {
       firstNumber = firstNumber === null
      ? num
      : firstNumber + num;
      calculator.innerText = firstNumber;
  } else {
      secondNumber = secondNumber === null
      ? num
      : secondNumber + num;
      calculator.innerText = secondNumber;
  }
};

// handle the operator 
function handleOperator(op) {
  operator = op;
}

// handle the equal
function handleEquals () {
  if (firstNumber === null || secondNumber === null || operator === null){
    return;
  }

  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 + num2;
      break;
    case '/':
      result = num1 / num2;
      break;
}
 calculator.innerText = result; 
};

 // handle clear 
 function handleClear () {
   firstNumber = null;
   secondNumber = null;
   operator = null;
   calculator.innerText = '0'
 };
