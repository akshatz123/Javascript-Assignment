var image =sessionStorage.getItem("tempimgdata");
profile=localStorage.getItem("userDetails");
profile1=JSON.parse(profile);
var user_array = JSON.parse(localStorage.getItem("userDetails"));
var session = sessionStorage.user;
todo_array = user_array;
var gender;
var img =sessionStorage.getItem("tempimgdata")
   
//Function for radio button
function getRadioVal() {
    if(document.getElementById("radio").value.checked === "Male"){
        gender = document.getElementById("radio").checked;
        }
    else if(document.getElementById("radio1").value === "Female"){
        gender = document.getElementById("radio1").checked;
        }
    return  gender;
}

//on Click Event
function edit(){
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("address").disabled = false;
    // document.getElementById("profile_picture").disabled = false;
    document.getElementsByName("gender").disabled = false;     
    for(let i=0;i<(document.getElementsByName("gender").length);i++)
    {
        document.getElementsByName("gender")[i].disabled = false;
    }
    document.getElementById("changePic").disabled = false;
}

function save(){
    for(index = 0; index < todo_array.length; index++){
    if(sessionStorage.user == todo_array[index].userName){
        todo_array[index].firstName = document.getElementById("fname").value;
        todo_array[index].lastName = document.getElementById("lname").value;
        todo_array[index].address = document.getElementById("address").value;
        for(let i=0;i<(document.getElementsByName("gender").length);i++)
        {
            if (document.getElementsByName("gender")[i].checked) {
                todo_array[index].gender = document.getElementsByName("gender")[i].value;
            }
        }
        todo_array[index].Image = img;
        user_array = JSON.stringify(user_array);
        localStorage.setItem("userDetails",user_array);
        window.location.href ="todo.html";
        }   
    }    
}

//view profile
function viewProfile(){
    for(index = 0; index < profile1.length; index++){
        if(sessionStorage.user == todo_array[index].userName){
            document.getElementById("fname").value = profile1[index].firstName;
            document.getElementById("lname").value = profile1[index].lastName;
            document.getElementById("address").value = profile1[index].address;
            document.getElementById("profile_picture").value =profile1[index].image;
            radioArr =document.getElementsByName("gender");
            if(radioArr[0].value == "Male" && profile1[index].gender === 'Male' ){
                radioArr[0].checked = true;
            }
            else if(radioArr[1].value == "Female" && profile1[index].gender === 'Female'){
                radioArr[1].checked = true;
            }
            
        }
    }
}
//Profile pic
function changeProfilePicture()
{
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

// Immidiately Invoked function expression
(function (){
    if(sessionStorage.getItem("user") === null ){
        window.location.href = "login.html";
        alert("Please login again to view your profile.");
    }
})();