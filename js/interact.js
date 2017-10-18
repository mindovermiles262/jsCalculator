// interact.js
// 2017-10-14 AD
// Methods to interact with the buttons of the calculator

let runningTotal = 0
const calcButtons = document.getElementsByClassName("calcButton");
const lcd = document.getElementsByClassName("lcd");

// Gets value of calcButton div
let value = function() {
  for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', function() {
      document.getElementsByClassName('lcd')[0].textContent = this.textContent;
      console.log(this.textContent);
    });
  }
}

value()