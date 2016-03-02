/**
 * Created by com on 16-2-25.
 */

function clean() {
    setValue("input", "");
}

function deleteLastChar() {
    var value = getValue("input");
    setValue("input", value.slice(0, -1));
}

function add(lastAddedChar) {
    var expresion = getValue("input");
    var operators = ['.', '*', '/', '+', '-', '%'];
    if (lastAddedChar == '.' && !isDotAllowed(expresion,operators)){
        return;
    }
    if (isOperatorAllowed(operators,expresion) || !isOperator(operators,lastAddedChar)) {
        setValue("input", expresion + lastAddedChar);
    }
}
function isOperator(operators,lastAddedChar){
    return operators.indexOf(lastAddedChar) != -1;
}

function isOperatorAllowed(operators,expresion){
    return expresion && (operators.indexOf(expresion.slice(-1)) == -1);
}

function isDotAllowed(value, signsArray){
    var char='';
    for (var i=0; i < value.length; i++ ){
        if (signsArray.indexOf(value.charAt(i)) != -1){
            char=value.charAt(i);
        }
    }
    if (char == '.'){
        return false;
    }
    return true;
}

function compute() {
    try {
        setValue("input", eval(getValue("input")));
    }
    catch (e) {
        c('Error')
    }
}

function getValue(elementId) {
    return document.getElementById(elementId).innerHTML;
}

function setValue(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}
