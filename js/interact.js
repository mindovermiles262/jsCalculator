// interact.js
// 2017-10-14 AD
// Methods to interact with the buttons of the calculator

const calcButtons = document.getElementsByClassName("calcButton");

// Gets value of calcButton div
let value = function() {
  for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', function() {
      console.log(this.textContent);
    });
  }
}

value()