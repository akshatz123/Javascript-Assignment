var pwd = '';
var lname = '';
var uname = '';
var fname = '';
var gender = '';
var address = '';
var image =sessionStorage.getItem("tempimgdata");
function check_for_blank(){
    if ((uname=  document.login.uname.value) ==''){
        alert("Please enter your username and it should consist of only alphabets");
        document.getElementById('uname').style.borderColor="red";
        return false;
    }
    if ((pwd = document.login.pass.value)==''){
        alert("Please enter the password again and it should consist of an alphabet, a number and a special character");
        document.getElementById('pass').style.borderColor="red";
        return false;
    }
    if ((fname=  document.login.fname.value)==''){
        alert("Please enter your first name and it should consist of only alphabets");
        document.getElementById('fname').style.borderColor="red";
        return false;
    }
    
    if ((lname = document.login.lname.value) ==''){
        alert("Please enter your last name and it should consist of only alphabets");
        document.getElementById('lname').style.borderColor="red";
        return false;
    }
    if(radioArr =  document.login.radio.value ==''){
        alert("Please enter your gender");
        return false;
    }
    if ((address = document.login.address.value) ==''){
        alert("Please enter your address again.");
        document.getElementById('address').style.borderColor="red";
        return false;
    }
    if (fname==''||lname==''||address==''||pwd==''||gender== null||uname==''||image == ''){
        return false;
    }
    //Gender selection
    radioArr = document.getElementsByName("gender").checked;
    for(var i = 0; i < (document.getElementsByName("gender").length);i++)
    {
        if (document.getElementsByName("gender")[i].checked) {
            gender = document.getElementsByName("gender")[i].value;
        }
    }


    //Address Validation
    var add =document.getElementById('address').value;
    var address_result=add;
    if(!(address_result)){
        document.getElementById("address").style.borderColor= "Red";
        return false;
    }

    // Firstname Validation
    fname =document.getElementById('fname').value;
    var name_regex = '^[a-zA-Z]+$';
    var fname_result= fname.match(name_regex);
    if(!(fname_result)){
        document.getElementById("fname").style.borderColor= "Red";
        return false;
    }

    //lastname validation
    lname = document.getElementById('lname').value;
    var lname_result = lname.match(name_regex);
    if(!(lname_result)){
        document.getElementById("lname").style.borderColor= "Red";
        return false;
    }

    //password validation
    pwd=document.getElementById('pass').value;
    var passwdregex ='[a-zA-Z0-9|\W].{6,}';
    var password_result = pwd.match(passwdregex);
    if(!(password_result)){
        document.getElementById("pass").style.borderColor= "Red";
        return false;
    }
    password_result= btoa(password_result);
    //username validation
    var user =document.getElementById('uname').value;
    var userreg = '^[A-Za-z]+$';
    var userresult = user.match(userreg);
    if(!(userresult)){
        document.getElementById("uname").style.borderColor= "Red";
        return false;
    }
    var userDetails=new Array();
    var obj = {
        "Image": image,
        "userName": uname,
        "password":    password_result,
        "firstName" :   fname,
        "lastName" : lname,
        "gender":   gender,
        "address":  address,
        "ToDO": []
        };
    if (localStorage.getItem("userDetails")) {
        userDetails = JSON.parse(localStorage.getItem("userDetails"));
        var isUserExists = false;
        for (i=0; i < userDetails.length; i++){
            if ((userDetails[i].userName) == user){
                isUserExists = true;
                break;
            }
        }
        if (isUserExists) {
           alert('user with same name already exists.');
            document.getElementById('uname').value='';
            return false;
        }
        else {
            userDetails.push(obj);
            var string = JSON.stringify(userDetails);
            localStorage.setItem("userDetails", string);
            return true;
        }
    }
    else {
        userDetails.push(obj);
        var string = JSON.stringify(userDetails);
        localStorage.setItem("userDetails", string);
        return true;
    }
}


//profile picture
function changeProfilePicture(){
    var Image =document.getElementById("changePic").files[0];
    getimgbase64(Image);
    function getimgbase64(Image){
        var reader = new FileReader();
        reader.readAsDataURL(Image);
        reader.onload = function () {
        var imgdata =reader.result;
        sessionStorage.setItem("tempimgdata",imgdata);
        document.getElementById("profile_picture").src=sessionStorage.tempimgdata;
        }
    }
}

// on click Registration
function registration(){
    if (check_for_blank()){
        window.open('login.html', "_self");
    } else {
        //alert('Something went wrong');
        return false;
    }
}
