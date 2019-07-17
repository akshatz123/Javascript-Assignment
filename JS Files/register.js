var pwd = '';
var lname = '';
var uname = '';
var fname = '';
var radio_Arr = '';
var address = '';
var image = sessionStorage.getItem("temp_img_data");
function check_for_blank(){
    if ((uname=  document.login.uname.value) ==''){
        alert("please enter only letters")
        document.getElementById('uname').style.borderColor="red";
        return false;
    }
    if ((pwd = document.login.pass.value)==''){
        document.getElementById('pass').style.borderColor="red";
        return false;
    }
    // if(image == null){
    //     alert("Please insert your profile image");
    //     return false;
    // }
    if ((fname=  document.login.fname.value)==''){
        alert("Please enter letters only")
        document.getElementById('fname').style.borderColor="red";
        return false;
    }
    
    if ((lname = document.login.lname.value) ==''){
        alert("Please enter letters only ")
        document.getElementById('lname').style.borderColor="red";
        return false;
    }
    if(radio_Arr = document.login.gender.value ==''){
        alert("please select gender");
        return false;
    }
    if ((address = document.login.address.value) ==''){
        alert("Please enter your address");
        document.getElementById('address').style.borderColor="red";
        return false;
    }
    if (fname==''||lname==''||address==''||pwd==''||radio_Arr== null||uname==''){
        return false;
    }
    //Gender selection
    radio_Arr = document.getElementsByName("gender").checked;
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
        alert("Please enter letters only");
        document.getElementById("fname").style.borderColor= "Red";
        return false;
    }

    //lastname validation
    lname = document.getElementById('lname').value;
    var lname_result = lname.match(name_regex);
    if(!(lname_result)){
        alert("Please enter letters only");
        document.getElementById("lname").style.borderColor= "Red";
        return false;
    }

    //password validation
    pwd=document.getElementById('pass').value;
    // var password_regex = '[a-zA-Z0-9|\W\s]';
    var password_regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})";
    var password_result = pwd.match(password_regex);
    if(!(password_result)){
        alert("Please enter a special character, a number, min 6 characters including small letters and capital letters");
        document.getElementById("pass").style.borderColor= "Red";
        return false;
    }
    password_result = btoa(pwd);
    //username validation
    var user =document.getElementById('uname').value;
    var userreg = '^[A-Za-z]+$';
    var userresult = user.match(userreg);
    if(!(userresult)){
        alert("Please enter letters only");
        document.getElementById("uname").style.borderColor= "Red";
        return false;
    }
    var user_Details=new Array();
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
    if (localStorage.getItem("user_Details")) {
        user_Details = JSON.parse(localStorage.getItem("user_Details"));
        var isUserExists = false;
        for (i=0; i < user_Details.length; i++){
            if ((user_Details[i].userName) == user){
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
            user_Details.push(obj);
            var string = JSON.stringify(user_Details);
            localStorage.setItem("user_Details", string);
            return true;
        }
    }
    else {
        user_Details.push(obj);
        var string = JSON.stringify(user_Details);
        localStorage.setItem("user_Details", string);
        return true;
    }
}


//profile picture
function changeProfilePicture(){
    var Image =document.getElementById("change_pic").files[0];
    getimgbase64(Image);
    
    function getimgbase64(Image){
        var reader = new FileReader();
        reader.readAsDataURL(Image);
        reader.onload = function () {
        var imgdata = reader.result;
        // console.log(imgdata);
        sessionStorage.setItem("temp_img_data",imgdata);
        document.getElementById("profile_picture").src = sessionStorage.temp_img_data;
        image = imgdata;
        };
        reader.onerror = function (error) {
        };}
    
}
// on click Registration
function registration(){
    if (check_for_blank()){
        window.open('html/login.html', "_self");
    } else {
        return false;
    }
}
