/**
 * Created by com on 16-2-25.
 */

 function clean() {
    document.getElementById("input").innerHTML = "";
 }

 function deleteLastChar() {
    var value = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = value.slice(0, -1);
 }

 function add(val) {
    var currentValue = document.getElementById("input").innerHTML;
    var s = ['.', '*', '/', '+', '-', '%'];
    console.log(s.indexOf(currentValue.slice(-1)));
    if (s.indexOf(currentValue.slice(-1)) < 0) {
        document.getElementById("input").innerHTML = (currentValue + val);
    }

 }

 function compute() {
    try {
        document.getElementById("input").innerHTML = (eval(document.getElementById("input").innerHTML));
    }
    catch (e) {
        c('Error')
    }
 }
