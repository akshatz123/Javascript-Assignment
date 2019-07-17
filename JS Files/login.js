var v ,password, uname, username_result, password_result, pwd, username, pass;
function logins(){
    document.getElementById("pass").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            validate();

        }
    });
}
function validate(){
    isLoggedIn=false;
    pass = document.getElementById("pass").value;
    user = document.getElementById('uname').value;
    //username validation
        var user_reg = "[A-Za-z]";
        var user_result = user.match(user_reg);
        if(!(user_result)){
            document.getElementById("uname").style.borderColor= "Red";
            return false;
        }
        // var passwdregex = '[a-zA-Z0-9|\W]';
        var passwd_regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})";
        var password_result = pass.match(passwd_regex);
        if(!(password_result)){
            document.getElementById("pass").style.borderColor= "Red";
            return false;
        }
        password_result = btoa(pass);
        user_array= JSON.parse(localStorage.getItem("user_details"));
        for (i=0; i<user_array.length; i++){
        pwd = user_array[i].password;
        if(pwd === password_result){
            break;
        }
        else{
            document.getElementById("pass").style.borderColor = "red"
        }
    }
    var flag = false;
    for (var index = 0; index < user_array.length; index++) 
    {
        if((user === user_array[index].user_name) && (password_result === user_array[index].password)){

            isLoggedIn = true;
            if(isLoggedIn===true)
            {
            sessionStorage.setItem('user_name',user );
            window.location='../html/todo.html';
            flag = true;
            break;
            }
        }
    }

    if (flag === false){
        // break;
    }
}