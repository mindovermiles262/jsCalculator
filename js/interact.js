// interact.js
// 2017-10-14 AD
// Methods to interact with the buttons of the calculator

const calcButtons = document.getElementsByClassName("calcButton");
const lcd = document.querySelector(".lcd > p")
let primaryValue = ""
let secondaryValue = null

// Gets value of calcButton div
let value = function() {
  for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', function(event) {
      console.log(secondaryValue)
      let inner = event.target
      if(inner.className ===  "number") { // append number to display
        primaryValue += inner.innerHTML
        lcd.innerHTML = primaryValue;
      } else if (inner.className === "operator") { // set math operator
        if (secondaryValue === "") {
          // set secondary value to primay Value
        } else {
          // do math
        }
      }
    });
  }
}

value()