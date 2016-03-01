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
        setVisibility("wrongFname", "visible");
        isValid=false;
    }else {
        setVisibility("wrongFname", "hidden");
    }
    if (!nameValidator.test(lname)) {
        setVisibility("wrongLname", "visible");
        isValid=false;
    }else {
        setVisibility("wrongLname", "hidden");
    }
    if (!egnValidator.test(egn)) {
        setVisibility("wrongEgn", "visible");
        isValid=false;
    }else {
        setVisibility("wrongEgn", "hidden");
    }
    if (!ageValidator.test(age)) {
        setVisibility("wrongAge", "visible");
        isValid=false;
    }else {
        setVisibility("wrongAge", "hidden");
    }
    if (!addressValidator.test(address)) {
        setVisibility("wrongAddress", "visible");
        isValid=false;
    }else {
        setVisibility("wrongAddress", "hidden");
    }
    if (!passwordValidator.test(password)) {
        setVisibility("wrongPassword", "visible");
        isValid=false;
    }else{
        setVisibility("wrongPassword", "hidden");
    }
    return isValid;
}
function setVisibility(elementName,visibility){
    var element = document.getElementById(elementName);
    element.innerHTML = " incorrect";
    element.style.visibility = visibility;
}