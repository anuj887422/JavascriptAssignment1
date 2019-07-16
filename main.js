function validateForm(){
    var contactNumber = document.forms["myForm"]["contactNumber"];
    var role = document.forms["myForm"]["role"];
    var gender = document.forms["myForm"]["gender"];
    var val = contactNumber.value
    if (!(/^\d{10}$/.test(val))){
        alert("Invalid number; must be ten digits")
        contactNumber.focus()
        return false
    }
    if(role.value == "default"){
        alert("Select Your Role");
        role.focus();
        return false;
    }
    if(gender.value == "default"){
        alert("Select Your Gender");
        gender.focus();
        return false;
    }
}