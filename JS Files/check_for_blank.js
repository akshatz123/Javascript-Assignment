var pwd = '', password_result;
var lname = '';
var uname = '';
var fname = '';
var radio_arr = '';
var address = '';
var image = sessionStorage.getItem("temp_img_data");
function check_for_blank(){
    if ((uname=  document.login.uname.value) ==''){
        alert("Please enter your username which contains only letters");
        document.getElementById('uname').style.borderColor="red";
        return false;
    }
    if ((pwd = document.login.pass.value)==''){
      alert("Error: Password must be minimum six characters long with at least one capital letter, one numeric value , one special character");
      document.getElementById('pass').style.borderColor="red";
      return false;
    }
    if ((fname=  document.login.fname.value)==''){
        alert("Please enter your first name");
        document.getElementById('fname').style.borderColor="red";
        return false;
    }

    if ((lname = document.login.lname.value) ==''){
        alert("Please enter your last name");
        document.getElementById('lname').style.borderColor="red";
        return false;
    }
    if(radio_arr = document.login.gender.value ==''){
        alert("Please select gender");
        return false;
    }
    if ((address = document.login.address.value) ==''){
        alert("Please enter your address");
        document.getElementById('address').style.borderColor="red";
        return false;
    }
    if (fname==''||lname==''||address==''||pwd==''||radio_arr== null||uname==''){
        return false;
    }
    else {
        return true;
    }
}
function validation() {
    //Gender selection
    radio_arr = document.getElementsByName("gender").checked;
    for (var i = 0; i < (document.getElementsByName("gender").length); i++) {
        if (document.getElementsByName("gender")[i].checked) {
            gender = document.getElementsByName("gender")[i].value;
        }
    }
    //Address Validation
    var add = document.getElementById('address').value;
    var address_result = add;
    if (!(address_result)) {
        document.getElementById("address").style.borderColor = "Red";
        return false;
    }
    // Firstname Validation
    fname = document.getElementById('fname').value;
    var name_regex = '^[a-zA-Z]+$';
    var fname_result = fname.match(name_regex);
    if (!(fname_result)) {
        document.getElementById("fname").style.borderColor = "Red";
        alert("Please enter letters only");
        return false;
    }
    //lastname validation
    lname = document.getElementById('lname').value;
    var lname_result = lname.match(name_regex);
    if (!(lname_result)) {
        document.getElementById("lname").style.borderColor = "Red";
        alert("Please enter letters only");
        return false;
    }
    else{
        return true;
    }
}

function storage(){
    var user_details = new Array();
    //user_name_and_password.password_result;
    var obj = {
        "Image": image,
        "user_name": uname,
        "password": btoa(pwd), //Encrypted Password
        "first_name": fname,
        "last_name": lname,
        "gender": gender,
        "address": address,
        "ToDO": []
    }
    if (localStorage.getItem("user_details")) {
        user_details = JSON.parse(localStorage.getItem("user_details"));
        var isUserExists = false;
        for (i = 0; i < user_details.length; i++) {
            if ((user_details[i].user_name) == uname) {
                isUserExists = true;
                break;
            }
        }
        if (isUserExists) {
            alert('user with same name already exists.');
            document.getElementById('uname').value = '';
            return false;
        }
        else {
            user_details.push(obj);
            var string = JSON.stringify(user_details);
            localStorage.setItem("user_details", string);
            return true;
        }
    }
    else {
        user_details.push(obj);
        var string = JSON.stringify(user_details);
        localStorage.setItem("user_details", string);
        return true;
    }
}
//profile picture
function change_profile_picture(){
    var Image =document.getElementById("change_pic").files[0];
    getimgbase64(Image);

    function getimgbase64(Image){
        var reader = new FileReader();
        reader.readAsDataURL(Image);
        reader.onload = function () {
        var imgdata = reader.result;
        sessionStorage.setItem("temp_img_data",imgdata);
        document.getElementById("profile_picture").src = sessionStorage.temp_img_data;
        image = imgdata;
        };
        reader.onerror = function (error) {
        };}

}
function registration(){
    if (check_for_blank() && validation() && user_name_and_password() && storage()){
        window.open('html/login.html', "_self");
    } else {
        return false;
    }
}
