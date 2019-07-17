var user_array = JSON.parse(localStorage.getItem("user_Details"));
var session = sessionStorage.user;
var gender;
var img = sessionStorage.getItem("tempimgdata");
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
    document.getElementById("changePic").disabled = false;
}

function save(){
    for(index = 0; index < user_array.length; index++){
    if(sessionStorage.user == user_array[index].userName){
        user_array[index].firstName = document.getElementById("fname").value;
        user_array[index].lastName = document.getElementById("lname").value;
        user_array[index].address = document.getElementById("address").value;
        for(let i = 0; i < (document.getElementsByName("gender").length);i++)
        {
            if (document.getElementsByName("gender")[i].checked) {
                user_array[index].gender = document.getElementsByName("gender")[i].value;
            }
        }
        user_array[index].Image = document.getElementById("profile_picture").src;
        user_array = JSON.stringify(user_array);
        localStorage.setItem("user_Details",user_array);
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
    document.getElementById("changePic").disabled = true;
}
//view profile
function viewProfile(){
        for(index = 0; index < user_array.length; index++){
            if(sessionStorage.user == user_array[index].userName){
                document.getElementById("fname").value = user_array[index].firstName;
                document.getElementById("lname").value = user_array[index].lastName;
                document.getElementById("address").value = user_array[index].address;
                radioArr =document.getElementsByName("gender");
                if(radioArr[0].value == "Male" && user_array[index].gender === 'Male' ){
                    radioArr[0].checked = true;
                }
                else if(radioArr[1].value == "Female" && user_array[index].gender === 'Female'){
                    radioArr[1].checked = true;
                }
                if(user_array[index].Image === null){
                    user_array[index].Image =document.getElementById("profile_picture").src;
                }
                document.getElementById("profile_picture").src = user_array[index].Image;
        }
    }
}
//Profile pic
function changeProfilePicture(){
    var Image =document.getElementById("changePic").files[0];
    getimgbase64(Image);
    function getimgbase64(Image)
    {
        var reader = new FileReader();
        reader.readAsDataURL(Image);
        reader.onload = function () {
        var imgdata =reader.result;
        sessionStorage.setItem("tempimgdata",imgdata);
        document.getElementById("profile_picture").src = sessionStorage.tempimgdata;
        Image = imgdata;
        };
        reader.onerror = function (error) {
        };    
    }
        
}

// Immidiately Invoked function expression
(function (){
    if(sessionStorage.getItem("user") === null ){
        window.location.href = "login.html";
        alert("Please login again to view your user_array.");
    }
})();
// Todo Button
function todo(){
    window.location.href ="todo.html";
}
// Logout Button
function onSubmit(){
    sessionStorage.clear();
    window.location="login.html";
  }