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
        var pass=document.getElementById('pass').value;
        var passwdregex ='[a-zA-Z0-9|\W].{6,}';
        var password_result = pass.match(passwdregex);
        if(!(password_result)){
            document.getElementById("pass").style.borderColor= "Red";
            return false;
        }
    if(localStorage.getItem("userDetails").includes(pass) &&  (localStorage.getItem("userDetails").includes(user))){
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