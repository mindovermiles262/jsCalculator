// interact.js
// 2017-10-14 AD
// Methods to interact with the buttons of the calculator

const calcButtons = document.getElementsByClassName("calcButton");
const lcd = document.querySelector(".lcd > p")
let primaryValue = ""
let secondaryValue = ""
let operator = ""

let value = function() {
  for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', function(event) {
      let inner = event.target
      if(inner.className ===  "number") { 
        // append number to display
        primaryValue += inner.innerHTML
        lcd.innerHTML = primaryValue;
      } else if (inner.className === "operator") {
        if (secondaryValue === "") {
          // runs first time setting secondaryValue
          secondaryValue = primaryValue
          primaryValue = "" 
          operator = inner.innerHTML    
        } else {
          switch(operator){
            case '+': 
              calc = add(secondaryValue, primaryValue);
              break;
            case '-':
              calc = subtract(secondaryValue, primaryValue);
              break;
            case 'x':
              calc = multiply(secondaryValue, primaryValue);
              break;
            case '/':
              calc = divide(secondaryValue, primaryValue);
              break;
          }
          operator = inner.innerHTML;
          primaryValue = "";
          lcd.innerHTML = calc;
          secondaryValue = calc;
        }
      } else if (["on", "clear"].includes(inner.className)) {
        // ON or CLEAR Button
        primaryValue = "";
        secondaryValue = "";
        lcd.innerHTML = "00000000"
      } else if (inner.className === "off") {
        // OFF Button
        lcd.innerHTML = ""
      }
    });
  }
}

value()