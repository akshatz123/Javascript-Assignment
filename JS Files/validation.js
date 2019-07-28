function user_name_and_password(){
    //password validation
    pwd = document.getElementById('pass').value;
    var password_regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})";
    var password_result = pwd.match(password_regex);
    if (!(password_result)) {
        document.getElementById("pass").style.borderColor = "Red";
        alert(" Error : Password must be minimum six characters long with at least one capital letter, one numeric value , one special character");
        return false;
    }
    password_result = btoa(pwd);
    //username validation
    var user = document.getElementById('uname').value;
    var user_reg = '^[A-Za-z]+$';
    var user_result = user.match(user_reg);
    if (!(user_result)) {
        document.getElementById("uname").style.borderColor = "Red";
        alert("Please enter letters only");
        return false;
    }
    else {
        return true;
    }
}