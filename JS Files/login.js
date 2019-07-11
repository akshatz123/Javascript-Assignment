var v ,password, uname, username_result, password_result, pwd, username, pass;
function logins(){
    isLoggedIn=false;
    pass=document.getElementById("pass").value;
    user =document.getElementById('uname').value;
        //username validation
        var userreg = "[A-Za-z]";
        var userresult = user.match(userreg);
        if(!(userresult)){
            document.getElementById("uname").style.borderColor= "Red";
            return false;
        }
        //password validation
        //var pass=document.getElementById('pass').value;

        var passwdregex ='[a-zA-Z0-9|\W].{6,}';
        var password_result = pass.match(passwdregex);
        var pwd;
        if(!(password_result)){
            document.getElementById("pass").style.borderColor= "Red";
            return false;
        }
        password_result = btoa(password_result);
        var user_array = localStorage.getItem("userDetails");
        user_array= JSON.parse(user_array);
        for (i=0; i<user_array.length; i++){
        pwd = user_array[i].password;
        //console.log(pwd);
        //var pwd = atob(user_array[i].password)
              if(pwd === password_result){
                break;
        }
    }
    

    if((localStorage.getItem("userDetails").includes(pwd)) &&  ((localStorage.getItem("userDetails").includes(user)))){
        isLoggedIn = true;
        if(isLoggedIn===true){
            sessionStorage.setItem('user',user );
            window.location='todo.html';
            }
        }
    else {
        alert("Invalid Password/Username");
}
}