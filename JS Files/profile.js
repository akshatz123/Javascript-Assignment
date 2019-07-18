var user_array = JSON.parse(localStorage.getItem("user_details"));
var session = sessionStorage.user;
var gender;
var img = sessionStorage.getItem("temp_img_data");
//Function for radio button
function getRadioVal() {
    if(document.getElementById("male").value.checked === "Male"){
        gender = document.getElementById("male").checked;
        }
    else if(document.getElementById("female").value === "Female"){
        gender = document.getElementById("female").checked;
        }
    return  gender;
}

//on Click Event
function edit(){
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementsByName("gender").disabled = false;     
    for(let i=0;i<(document.getElementsByName("gender").length);i++)
    {
        document.getElementsByName("gender")[i].disabled = false;
    }
    document.getElementById("change_pic").disabled = false;
}

function save(){
    for(index = 0; index < user_array.length; index++){
    if(sessionStorage.user_name == user_array[index].user_name){
        user_array[index].first_name = document.getElementById("fname").value;
        user_array[index].last_name = document.getElementById("lname").value;
        user_array[index].address = document.getElementById("address").value;
        for(let i = 0; i < (document.getElementsByName("gender").length);i++)
        {
            if (document.getElementsByName("gender")[i].checked) {
                user_array[index].gender = document.getElementsByName("gender")[i].value;
            }
        }
        user_array[index].Image = document.getElementById("profile_picture").src;
        user_array = JSON.stringify(user_array);
        localStorage.setItem("user_details",user_array);
        break;
        }
       
    }
    document.getElementById("fname").disabled = true;
    document.getElementById("lname").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementsByName("gender").disabled = true;     
    for(let i=0;i<(document.getElementsByName("gender").length);i++)
    {
        document.getElementsByName("gender")[i].disabled = true;
    }
    document.getElementById("change_pic").disabled = true;
}
//view profile
function view_profile(){
        for(index = 0; index < user_array.length; index++){
            if(sessionStorage.user == user_array[index].userName){
                document.getElementById("fname").value = user_array[index].first_name;
                document.getElementById("lname").value = user_array[index].last_name;
                document.getElementById("address").value = user_array[index].address;
                radio_arr =document.getElementsByName("gender");
                if(radio_arr[0].value == "Male" && user_array[index].gender === 'Male' ){
                    radio_arr[0].checked = true;
                }
                else if(radio_arr[1].value == "Female" && user_array[index].gender === 'Female'){
                    radio_arr[1].checked = true;
                }
                if(user_array[index].Image === null){
                    user_array[index].Image =document.getElementById("profile_picture").src;
                }
                document.getElementById("profile_picture").src = user_array[index].Image;
        }
    }
}
//Profile pic
function change_profile_picture(){
    var Image =document.getElementById("change_pic").files[0];
    getimgbase64(Image);
    function getimgbase64(Image)
    {
        var reader = new FileReader();
        reader.readAsDataURL(Image);
        reader.onload = function () {
        var imgdata =reader.result;
        sessionStorage.setItem("temp_img_data",imgdata);
        document.getElementById("profile_picture").src = sessionStorage.temp_img_data;
        Image = imgdata;
    };
        reader.onerror = function (error) {
        };    
    }
        
}

// Immidiately Invoked function expression
(function (){
    if(sessionStorage.getItem("user_name") === null ){
        window.location.href = "login.html";
        alert("Please login again to view your details.");
    }
})();
// Todo Button
function todo(){
    window.location.href ="todo.html";
}
// Logout Button
function on_submit(){
    sessionStorage.clear();
    window.location="login.html";
  }