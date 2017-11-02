// interact.js
// 2017-10-14 AD
// Methods to interact with the buttons of the calculator

const calcButtons = document.getElementsByClassName("calcButton");
const lcd = document.querySelector(".lcd > p")
let primaryValue = ""
let storedValue = ""
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
        if (storedValue === "") {
          // runs first time setting storedValue
          storedValue = primaryValue
          primaryValue = "" 
          operator = inner.innerHTML    
        } else {
          // do maths
          calc = calculate(operator, primaryValue, storedValue)
          operator = inner.innerHTML;
          primaryValue = "";
          lcd.innerHTML = calc;
          storedValue = calc;
        }
      } else if (["on", "clear"].includes(inner.className)) {
        // ON or CLEAR Button
        primaryValue = "";
        storedValue = "";
        lcd.innerHTML = "MemCleared"
        setTimeout(function () { lcd.innerHTML = "0" }, 1000)
      } else if (inner.className === "off") {
        // OFF Button
        primaryValue = "";
        storedValue = "";
        lcd.innerHTML = "Goodbye"
        setTimeout( function() {lcd.innerHTML = ""}, 1500)
      } else if (inner.innerHTML === "=") {
        // EQUALS button
        if (storedValue === "") {
          primaryValue = ""
        } else {
          if (operator !== "=") {
            console.log("OP")
            calc = calculate(operator, primaryValue, storedValue)
            lcd.innerHTML = calc;
            storedValue = calc;
          }
        }
      }
      // Debugging
      // console.log("PRI: " + primaryValue);
      // console.log("STR: " + storedValue);
      // console.log("OP :" + operator)
    });
  }
}

value()