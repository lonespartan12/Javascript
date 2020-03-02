function validateForm() {
    var x = document.forms["myForm"]["phone"].value;
    if(x == "") {
        alert("Name must be filled out");
        return false;
    }
}