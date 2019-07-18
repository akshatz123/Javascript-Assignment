var  user_name, user, 
duedate='', reminder='', categories='', is_public='';
var user_array = JSON.parse(localStorage.getItem("user_details"));
user_name = sessionStorage.getItem("user"); //fetch data from session storage
var session = sessionStorage.user;

for(var index = 0; index < user_array.length; index++){
  if(session == user_array[index].user_name)   // username found then break
  {
    var user_id =index;
    break;
  }
}
//Add function
function new_element() {
    description= document.getElementById("description").value;
    if(description==''){
      alert("Please enter your description of Todo.");
      document.getElementById("description").style.borderColor = "red";
      return false;
    }
    if(document.todo.categories.value == 'select'){
      alert("Please select suitable category");
      return false;
    }
    else{
      categories=document.getElementById("categories").value;
    }
    if(is_public = document.todo.chooseone.value ==''){
      alert("Please select whether your todoList  will be Public or private");
      return false;
  }
  today = new Date();
  if((new Date(document.getElementById("due_date").value).getTime() < today.getTime())||(document.getElementById("due_date").value === "")){
    document.getElementById("due_date").style.borderColor = "red";
    alert ("Due date should be greater than or equal to current date");
    return false;
  }
  else {
    Due_Date=document.getElementById("due_date").value;
  }
  if((document.getElementById("reminder").value === '')||(new Date(document.getElementById("reminder").value).getTime() < new Date().getTime())||(new Date(document.getElementById("reminder").value).getTime() > new Date(document.getElementById("due_date").value).getTime())){
    document.getElementById("reminder").style.borderColor = "red";
    alert ("Reminder Date should be greater than current date & less than due date");
    return false;
    }
  else{
    reminder = document.getElementById("reminder").value;
    }
  
    

    todo_id=new Date().getTime();
    is_public =  document.querySelector('input[name="chooseone"]:checked').value;
    pending = document.getElementById("pending").value;
    if(description==""||reminder==""||due_date==""||categories==null||is_public==null){
      alert("Please fill all the fields marked with *");
      return false;
    }
    todo_obj = {
      "todo_id" : todo_id,
      "Description" : description,
      "Reminder" : reminder,
      "Due_Date" : Due_Date,
      "Categories" :categories,
      "is_public" : is_public,
      "is_done": pending
  }
 
  window.location.reload();
  
  for(var i = 0; i < user_array.length; i++)
  {
    if(user_name == user_array[i].userName)   // username found then break
    {
      user_array[i].ToDO.push(todo_obj);
      break;
    }
  }
  localStorage.setItem("user_details",JSON.stringify(user_array));
}
  function getRadioVal() {
    if(document.getElementsByName("radio").values === "Public"){
      is_public = "Public";
      }
    else if(document.getElementsByName("radio").values === "Private"){
        is_public = "Private";
      }
    return  is_public;
}
//Display function
function display_element(input_array){
  let a=document.getElementById("table_body");
  let deleteChild=a.lastElementChild;
  while(deleteChild)
  {
  a.removeChild(deleteChild);
  deleteChild=a.lastElementChild;
  } 
  for( var index = 0; index < input_array.length; index++ ) {
      var input= document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("class", "selectedcheckbox"+index);
      var td1=document.createElement("tr");
      var row = "<tr><td><input type ='checkbox' class='check' name='rows' id=checkbox-"+input_array[index].todo_id+"></td><td>"+input_array[index].Description+"</td><td>"+input_array[index].Categories+"</td><td>"+input_array[index].Due_Date+"</td><td>"+input_array[index].Reminder+"</td><td>"+input_array[index].is_public  +"</td><td>"+input_array[index].is_done+"</td><td><input type='button'  value='Done' id= done-"+input_array[index].todo_id+" onclick = done("+input_array[index].todo_id+")></td><td><input type = 'button' value = 'Edit' id = edit-"+input_array[index].todo_id+" onclick=edit("+input_array[index].todo_id+") /></td> <td><input type='button' value='Save'  id = save-"+input_array[index].todo_id+" onclick=save("+input_array[index].todo_id+")></td></tr>";
      td1.innerHTML=row;
      var table_head = document.getElementById("table_body");
      table_head.appendChild(td1);
      if(input_array[index].is_done==="Done"){
        document.getElementById("done-"+input_array[index].todo_id).style.display="none";
        document.getElementById("edit-"+input_array[index].todo_id).style.display = "none";
        document.getElementById("save-"+input_array[index].todo_id).style.display = "none";
        
      }
      else
      {
        document.getElementById("done-"+input_array[index].todo_id).style.borderRadius = "9px";
        document.getElementById("edit-"+input_array[index].todo_id).style.borderRadius = "9px";
        document.getElementById("save-"+input_array[index].todo_id).style.borderRadius = "9px";
        document.getElementById("edit-"+input_array[index].todo_id).style.backgroundColor= "lightcoral";
        document.getElementById("done-"+input_array[index].todo_id).style.display="inline-block";
        document.getElementById("edit-"+input_array[index].todo_id).style.display="inline-block";
        document.getElementById("save-"+input_array[index].todo_id).style.display="inline-block";
        document.getElementById("save-"+input_array[index].todo_id).style.backgroundColor="lightgreen";
        document.getElementById("done-"+input_array[index].todo_id).style.backgroundColor="floralwhite";
      }
    }
}
//Delete Function
function on_delete(){
  var checked_array=[];
  user_array= JSON.parse(localStorage.getItem("user_details"));
  var deletearray = document.getElementsByName("rows");

  for(var j = 0;j < deletearray.length;j++){
    todostring = deletearray[j].id;
    todo_id = todostring.split("-");
    
    if(document.getElementById("checkbox-"+todo_id[1]).checked == true)
    {
      checked_array.push(todo_id[1]);
    }
  }
  for(var i = checked_array.length-1;i>=0 ;i--)
  {
    for(var j = 0;j < user_array[userid].ToDO.length;j++)
    {
    if(user_array[userid].ToDO[j].todo_id == checked_array[i]){
        user_array[userid].ToDO.splice(j, 1);
      }
    }
  }

  localStorage.setItem("user_details",JSON.stringify(user_array));
  window.location.reload();
    }

//logout function
function on_submit(){
  sessionStorage.clear();
  window.location="login.html";
}
//Redirects to Profile page
function view_profile(){
  window.location.href='../html/profile.html';
}

// Immidiately Invoked function expression
(function (){
  if(sessionStorage.getItem("user_name") === null ){
      alert("Please login again to view your todo.");
      window.location.href = "login.html";
  }
})();
