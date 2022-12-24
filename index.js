function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Don't do that";
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operator';
  }
}

const display = document.querySelector('.display');
let displayNum = '0';
let stack = [];

function clear() {
  displayNum = '0';
  stack = [];
  display.textContent = displayNum;
}

function handleNumpad(num) {
  if (displayNum === '0') {
    displayNum = num;
  } else if (num !== '.' || !displayNum.includes('.')) {
    displayNum += num;
  }
  display.textContent = displayNum;
}

function handleOperator(op) {
  stack.push(displayNum);
  stack.push(op);
  displayNum = '0';
  display.textContent = displayNum;
}

function handleEquals() {
  stack.push(displayNum);
  let sum = parseInt(stack[0], 10);
  let i = 1;
  while (i < stack.length) {
    const next = parseInt(stack[i + 1], 10);
    const result = operate(stack[i], sum, next);
    sum = result;
    i += 2;
  }
  displayNum = sum;
  stack = [sum];
  display.textContent = displayNum;
}

const btnC = document.querySelector('#clear');
btnC.addEventListener('click', () => {
  clear();
});

const btnPct = document.querySelector('#percent');
btnPct.addEventListener('click', () => {
  // TODO: ADD PERCENT FUNCTIONALITY
});

const btnDiv = document.querySelector('#divide');
btnDiv.addEventListener('click', () => {
  handleOperator('/');
});

const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener('click', () => {
  handleNumpad('7');
});

const btnEight = document.querySelector('#eight');
btnEight.addEventListener('click', () => {
  handleNumpad('8');
});

const btnNine = document.querySelector('#nine');
btnNine.addEventListener('click', () => {
  handleNumpad('9');
});

const btnMult = document.querySelector('#multiply');
btnMult.addEventListener('click', () => {
  handleOperator('*');
});

const btnFour = document.querySelector('#four');
btnFour.addEventListener('click', () => {
  handleNumpad('4');
});

const btnFive = document.querySelector('#five');
btnFive.addEventListener('click', () => {
  handleNumpad('5');
});

const btnSix = document.querySelector('#six');
btnSix.addEventListener('click', () => {
  handleNumpad('6');
});

const btnSub = document.querySelector('#subtract');
btnSub.addEventListener('click', () => {
  handleOperator('-');
});

const btnOne = document.querySelector('#one');
btnOne.addEventListener('click', () => {
  handleNumpad('1');
});

const btnTwo = document.querySelector('#two');
btnTwo.addEventListener('click', () => {
  handleNumpad('2');
});

const btnThree = document.querySelector('#three');
btnThree.addEventListener('click', () => {
  handleNumpad('3');
});

const btnPlus = document.querySelector('#add');
btnPlus.addEventListener('click', () => {
  handleOperator('+');
});

const btnZero = document.querySelector('#zero');
btnZero.addEventListener('click', () => {
  handleNumpad('0');
});

const btnDec = document.querySelector('#decimal');
btnDec.addEventListener('click', () => {
  handleNumpad('.');
});

const btnEqual = document.querySelector('#equals');
btnEqual.addEventListener('click', () => {
  handleEquals();
});
