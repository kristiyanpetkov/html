/**
 * Created by com on 16-2-26.
 */
function isValidNumber(inputID) {
    var validator = new RegExp("^(0)$|^([1-9]){1,10}$|^([1-9]){1,10}\.([0-9]){1,5}$|^(0)\.([0-9]){1,5}.$");
    var inputValue = document.getElementById("number").value;
    if (!validator.test(inputValue)) {
        setVisibility("wrongNumber","visible");
    } else {
        setVisibility("wrongNumber","hidden");
    }
}
function setVisibility(elementName,visibility){
    var element = document.getElementById(elementName);
    element.innerHTML = " incorrect";
    element.style.visibility = visibility;
}
