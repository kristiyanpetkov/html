var enterOnce;
function numInput(digit) {
  var display = document.getElementById("value");
  if (display.value === '0') {
    display.value = '';
    display.value += digit;
  }
  display.value += digit;
}

function decimalInput() {
  var display = document.getElementById("value");
  if (display.value.indexOf('.') === -1) {
    display.value += '.';
    enterOnce = false;
  }
  var displayValue = document.getElementById("value").value;
  var chars = displayValue.split("");
  for (i = 0; i < chars.length; i++) {
    if (chars[i] == "+" || chars[i] == "*" || chars[i] == "-" || chars[i] == "/") {
      if (enterOnce == true && !isNaN(chars[chars.length - 1])) {
        display.value += '.';
        enterOnce = false;
      }
    }
  }
}

function clearLastSymbol() {
  var display = document.getElementById("value");
  if (display != 0) {
    display.value = display.value.substring(0, display.value.length - 1);
  }
}

function clearAll() {
  document.getElementById("value").value = 0;
  enterOnce = true;
}

function setOperation(operation) {
  var display = document.getElementById("value");
  var displayValue = document.getElementById("value").value;
  var chars = displayValue.split("");
  for (i = 0; i < chars.length; i++) {
    if (chars[i] == "+" || chars[i] == "*" || chars[i] == "-" || chars[i] == "/") {
      calculate();
    }
  }
  enterOnce = true;
  display.value = display.value + operation;
}

function calculate() {
  var display = document.getElementById("value");
  display.value = eval(display.value);
}


