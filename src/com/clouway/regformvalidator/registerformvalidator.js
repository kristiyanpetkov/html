function validate(fieldName, regexp, errorMsg, errorField) {
  console.log(fieldName);
  var valuee = document.forms["form"][fieldName].value;
  if (!valuee.match(regexp)) {
    document.getElementById(errorField).innerHTML = errorMsg;
    document.getElementById("sign_user").disabled = true;
    return;
  }
  document.getElementById(errorField).innerHTML = "";
  if (document.form.address.value != "" &&
          document.form.age.value != "" &&
          document.form.cpassword.value != "" &&
          document.form.egn.value != "" &&
          document.form.firstname.value != "" &&
          document.form.lastname.value != "" &&
          document.form.password.value != "") {
    document.getElementById("sign_user").disabled = false;
  }
}

function Submit() {
  successfullMessage = "Registration successful!";
  document.getElementById("regSuccessBox").innerHTML = successfullMessage.fontcolor("green");
}
