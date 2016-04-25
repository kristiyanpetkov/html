function numInput(digit) {
  var display = document.getElementById("value");
  if (display.value === '0') {
    display.value = '';
    display.value += digit;
  } else {
    display.value += digit;
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
  display.value = display.value + operation;
}

function calculate() {
  var display = document.getElementById("value");
  display.value = eval(display.value);
}


