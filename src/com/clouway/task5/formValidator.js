/**
 * Created by com on 16-2-26.
 */
function validateForm() {
    var fname = document.forms["myForm"]["firstName"].value;
    var lname = document.forms["myForm"]["lastName"].value;
    var egn = document.forms["myForm"]["egn"].value;
    var age = document.forms["myForm"]["age"].value;
    var address = document.forms["myForm"]["address"].value;
    var password = document.forms["myForm"]["password"].value;
    var isValid=true;
    var nameValidator=new RegExp("^([a-z\A-Z]){3,15}$");
    var egnValidator=new RegExp("^([0-9]){10,10}$");
    var ageValidator=new RegExp("^(1[89]|[2-9][0-9]|1[10][0-8])$");
    var addressValidator=new RegExp("^([a-z\A-Z\0-9]){1,100}$");
    var passwordValidator=new RegExp("^([a-z\A-Z\0-9]){6,18}$");

    if (!nameValidator.test(fname)) {
        showElement("wrongFname");
        isValid=false;
    }else {
        hidden("wrongFname");
    }
    if (!nameValidator.test(lname)) {
        showElement("wrongLname");
        isValid=false;
    }else {
        hidden("wrongLname");
    }
    if (!egnValidator.test(egn)) {
        showElement("wrongEgn");
        isValid=false;
    }else {
        hidden("wrongEgn");
    }
    if (!ageValidator.test(age)) {
        showElement("wrongAge");
        isValid=false;
    }else {
        hidden("wrongAge");
    }
    if (!addressValidator.test(address)) {
        showElement("wrongAddress");
        isValid=false;
    }else {
        hidden("wrongAddress");
    }
    if (!passwordValidator.test(password)) {
        showElement("wrongPassword");
        isValid=false;
    }else{
        hidden("wrongPassword");
    }
    return isValid;
}

function  hidden(elementId){
    var element = document.getElementById(elementId);
    element.style.visibility = 'hidden';
}

function showElement(elementId){
    var element = document.getElementById(elementId);
    element.innerHTML = " incorrect";
    element.style.visibility = 'visible';
}