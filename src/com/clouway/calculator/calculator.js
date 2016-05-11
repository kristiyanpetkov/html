var enterOnce;
function enterDigit(digit) {
  var display = document.getElementById("screen");
  var displayValue = document.getElementById("screen").value;
  var chars = displayValue.split("");

  if (display.value === '0') {
    display.value = '';
  }
  display.value += digit;
}

function enterPoint() {
  var display = document.getElementById("screen");
  if (display.value.indexOf('.') === -1) {
    display.value += '.';
    enterOnce = false;
    return;
  }
  var displayValue = document.getElementById("screen").value;
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
  var display = document.getElementById("screen");
  if (display != 0) {
    display.value = display.value.substring(0, display.value.length - 1);
  }
}

function clearAll() {
  document.getElementById("screen").value = 0;
  enterOnce = true;
}

function setOperation(operation) {
  var display = document.getElementById("screen");
  var displayValue = document.getElementById("screen").value;
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
  var display = document.getElementById("screen");
  display.value = eval(display.value);
}


