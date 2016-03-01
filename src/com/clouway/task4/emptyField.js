/**
 * Created by clouway on 16-2-29.
 */
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        document.getElementById("demo").innerHTML = " Name must be filled out";
        return false;
    }else {
        document.getElementById("demo").innerHTML = null;
    }
}