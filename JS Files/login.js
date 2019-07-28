var v ,password, uname, username_result, password_result, pwd, username, pass, user;
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
    user_name_and_password();
    user = document.getElementById("uname").value;
    password_result = btoa (document.getElementById("pass").value);
    var flag = false;
    user_array = JSON.parse(localStorage.getItem("user_details"));
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