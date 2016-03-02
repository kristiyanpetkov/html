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

function add(val) {
    var currentValue = getValue("input");
    var signsArray = ['.', '*', '/', '+', '-', '%'];
    if ((currentValue && signsArray.indexOf(currentValue.slice(-1)) == -1) || signsArray.indexOf(val) == -1) {
        if (lastCharInValueFromArray(currentValue,signsArray) != '.' && val == '.' ){
            setValue("input", currentValue + val);
        }else if (val != '.'){
            setValue("input", currentValue + val);
        }
    }
}

function lastCharInValueFromArray(value, signsArray){
    var char='';
    for (var i=0; i < value.length; i++ ){
        if (signsArray.indexOf(value.charAt(i)) != -1){
            char=value.charAt(i);
        }
    }
    return char;
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
