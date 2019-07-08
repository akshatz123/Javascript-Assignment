profile=localStorage.getItem("userDetails");
profile1=JSON.parse(profile);
var uname=profile1.Username;
var user_array = JSON.parse(localStorage.getItem("userDetails"));
var session = sessionStorage.user;
todo_array = user_array;
var gender;
//Function for radio button
function getRadioVal() {
    if(document.getElementById("radio").value.checked === "Male"){
        gender = document.getElementById("radio").value;
        }
    else if(document.getElementById("radio").value === "Female"){
        gender = document.getElementById("radio").value;
        }
    return  gender;
}
//on Click Event
function edit(){
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("Address").disabled = false;
    // document.getElementById("profile_picture").disabled = false;
    document.getElementsByName("gender").disabled = false;     
    for(let i=0;i<(document.getElementsByName("gender").length);i++)
    {
        document.getElementsByName("gender")[i].disabled = false;
    }
}

function save(){
    for(index = 0; index < todo_array.length; index++){
    if(sessionStorage.user == todo_array[index].Username){
        todo_array[index].FirstName = document.getElementById("fname").value;
        todo_array[index].LastName = document.getElementById("lname").value;
        todo_array[index].Address = document.getElementById("Address").value;
        // todo_array[index].image = document.getElementById("profile_picture").value;
        todo_array[index].Gender = getRadioVal();
        user_array = JSON.stringify(user_array);
        localStorage.setItem('userDetails',user_array);
        window.location.reload();
        }   
    }    
}

//view profile
function viewProfile(){
    for (var i=0; i< profile.length; i++){
        unameSession=uname;
        //document.getElementsByName("gender").value=profile[i].gender;
        document.getElementById("fname").value=profile1[i].FirstName;
        document.getElementById("lname").value=profile1[i].LastName;
        document.getElementById("Address").value=profile1[i].Address;
        getRadioVal();
        break;
    }
}               

function changeProfilePicture()
{
    let image = document.getElementById("profilepic").files[0];

    getimgbase64(image);

    function getimgbase64(image)
    {
        let readImg = new FileReader();
        readImg.readAsDataURL(image);
        readImg.onload = function () {
        let profileUrl = readImg.result;
        sessionStorage.setItem("profileSessionKey",profileUrl);
        document.getElementById("profilepicture").src = sessionStorage.profileSessionKey;
        };
        readImg.onerror = function (error) {
        };
    }
}