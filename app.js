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

calculator.addEventListener('click', (event) => {
  console.log(event.target.innerText);

  if (event.target.classList.contains('number')) {
    const = 
  }

  if (event.target.innerText === '*') {
    
  }
});
