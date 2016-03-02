/**
 * Created by clouway on 16-2-29.
 */
function validateForm(formName, fNameId, displayId) {
    var x = document.forms[formName][fNameId].value;
    if (x == null || x == "") {
        document.getElementById(displayId).innerHTML = " Name must be filled out";
        return false;
    }else {
        document.getElementById(displayId).innerHTML = null;
    }
}