var v ,password, uname, username_result, password_result, pwd, username, pass;
function logins(){
    if(onclick == true){
     validate();
    }
    document.getElementById("pass").addEventListener("keyup", function(event) {
        event.preventDefault();
        document.getElementById("pass").length
        if (event.keyCode === 13) {
            validate();
            console.log(event.keyCode);
        }
    });
        
}
    function validate(){
        isLoggedIn=false;
        pass = document.getElementById("pass").value;
        user = document.getElementById('uname').value;
        //username validation
            var userreg = "[A-Za-z]";
            var userresult = user.match(userreg);
            if(!(userresult)){
                document.getElementById("uname").style.borderColor= "Red";
                return false;
            }
            var passwdregex ='[a-zA-Z0-9|\W]';
            var password_result = pass.match(passwdregex);
            if(!(password_result)){
                document.getElementById("pass").style.borderColor= "Red";
                return false;
            }
            password_result = btoa(pass);
            // var user_array = localStorage.getItem("user_Details");
            user_array= JSON.parse(localStorage.getItem("user_Details"));
            for (i=0; i<user_array.length; i++){
            pwd = user_array[i].password;
            if(pwd === password_result){
                break;
            }
        }
        var flag = false;
        for (var index = 0; index < user_array.length; index++) 
        {
            if((user ===user_array[index].userName) && (pwd === user_array[index].password)){
                isLoggedIn = true;
                if(isLoggedIn===true)
                {
                sessionStorage.setItem('user',user );
                window.location='../html/todo.html';
                flag = true;
                break;
                }
            }
        }

        if (flag === false){
            alert("Invalid Password/Username");
        }
    }