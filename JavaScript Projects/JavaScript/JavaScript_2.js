function validateForm() {
    varx=document.forms["myForm"]["fname"].value;
    if (x==""){
        alert("Name must be filled out");
        return false;
    }
}