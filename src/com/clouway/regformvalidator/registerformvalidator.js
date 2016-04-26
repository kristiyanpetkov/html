function validate(fieldName, regexp, errorMsg, errorField) {
  var valuee = document.forms["form"][fieldName].value;

  if (!valuee.match(regexp)) {
    document.getElementById(errorField).innerHTML = errorMsg;
    document.getElementById("sign_user").disabled = true;
    return;
  }

  document.getElementById(errorField).innerHTML = "";
  var f = document.forms["form"].elements;

  for (var i = 0; i < f.length - 1; i++) {
    if (f[i].value.length == 0) {
      return;
    }
  }

  document.getElementById("sign_user").disabled = false;
}

function Submit() {
  successfullMessage = "Registration successful!";
  document.getElementById("regSuccessBox").innerHTML = successfullMessage.fontcolor("green");
}
