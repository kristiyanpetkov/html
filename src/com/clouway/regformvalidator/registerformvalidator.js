function validate(fieldName, regexp, errorMsg, errorField) {
  console.log(fieldName);
  var valuee = document.forms["form"][fieldName].value;
  if (!valuee.match(regexp)) {
    document.getElementById(errorField).innerHTML = errorMsg;
    return;
  }
  document.getElementById(errorField).innerHTML = "";
}

function Submit() {
  var successfullMessage;
  var age = document.form.age.value;
  var egn = document.form.egn.value;
  var address = document.form.address.value;
  var lastname = document.form.lastname.value;
  var firstname = document.form.firstname.value;
  var passowrd = document.form.password.value;
  var cpassword = document.form.cpassword.value;
  if (document.getElementById("errorBox").innerHTML == ""
          && Object.keys(cpassword).length != 0
          && Object.keys(firstname).length != 0
          && Object.keys(lastname).length != 0
          && Object.keys(age).length != 0
          && Object.keys(address).length != 0
          && Object.keys(egn).length != 0
          && Object.keys(passowrd).length != 0) {
    successfullMessage = "Registration successful!";
    document.getElementById("regSuccessBox").innerHTML = successfullMessage.fontcolor("green");
  } else {
    successfullMessage = "Registration NOT successful!";
    document.getElementById("regSuccessBox").innerHTML = successfullMessage.fontcolor("red");
  }
}
