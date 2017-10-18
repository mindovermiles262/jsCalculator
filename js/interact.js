// interact.js
// 2017-10-14 AD
// Methods to interact with the buttons of the calculator

const displayValue = function(element) {
  console.log(element.val())
};

const calcButtons = document.getElementsByClassName("calcButton");

for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', displayValue, false);
}