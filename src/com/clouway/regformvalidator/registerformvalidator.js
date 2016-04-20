
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
  if (document.getElementById("errorBox").innerHTML == "") {
    successfullMessage = "Registration successful!";
    document.getElementById("regSuccessBox").innerHTML = successfullMessage.fontcolor("green");
  } else {
    successfullMessage = "Registration NOT successful!";
    document.getElementById("regSuccessBox").innerHTML = successfullMessage.fontcolor("red");
  }
}
