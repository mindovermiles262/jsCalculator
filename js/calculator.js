// calculator.js
// 2017-10-14 AD

function add (x, y) {
  return Number(x) + Number(y);
};

function subtract (x, y){
  return Number(x) - Number(y);
};

function multiply(x, y){
  return Number(x) * Number(y);
};

function divide(x, y){
  return Number(x) / Number(y);
};

function calculate(operator, primaryValue, storedValue) {
  switch (operator) {
    case '+':
      return add(storedValue, primaryValue);
    case '-':
      return subtract(storedValue, primaryValue);
    case 'X':
      return multiply(storedValue, primaryValue);
    case '/':
      return divide(storedValue, primaryValue);
  }
}