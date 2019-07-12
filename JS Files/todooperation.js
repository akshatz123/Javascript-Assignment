var user_array = JSON.parse(localStorage.getItem("userDetails"));
var session = sessionStorage.user;
var status ="Pending"; 

for(var index = 0; index < user_array.length; index++)
{
  if(session == user_array[index].userName)   // username found then break
  {
    userid = index;
    var todo_array = user_array[userid].ToDO;
    break;
  }
}



//Edit ToDo
function edit(IdofElement){
  var index;
  for(var index = 0; index < todo_array.length; index++){
    if(todo_array[index].TodoId == IdofElement){
      todoid = index;
      document.getElementById("description").value = todo_array[index].Description;
      document.getElementById("categories").value = todo_array[index].Categories;
      document.getElementById("due_date").value = todo_array[index].Due_Date;
      document.getElementById("reminder").value = todo_array[index].Reminder;
      for(var i=0;i < (document.getElementsByName("chooseone").length); i++){
          document.getElementsByName("chooseone")[index].checked= todo_array[index].isPublic;
        }
      break;
    }
    }  
}

//Save ToDO
function save(IdofElement){
  var index;
    for(index = 0; index < todo_array.length; index++){
      if(todo_array[index].TodoId == IdofElement){
        todoid =index;
        break;
      }
    }

    todo_array[todoid].Description =document.getElementById("description").value;
    todo_array[todoid].Categories =document.getElementById("categories").value;
    todo_array[todoid].Due_Date = document.getElementById("due_date").value;
    todo_array[todoid].Reminder = document.getElementById("reminder").value;
    for(let i = 0; i < (document.getElementsByName("chooseone").length);i++)
    {
        if (document.getElementsByName("chooseone")[i].checked) {
            todo_array[index].isPublic = document.getElementsByName("chooseone")[i].value;
        }
    }
    user_array = JSON.stringify(user_array);
    localStorage.setItem('userDetails',user_array);
    window.location ='todo.html';
   }    

//Filter By Category
function filter(){
  if(document.getElementById("filterbycategories").value === "Category"){
    display_element(todo_array);
  }
  else if(document.getElementById("filterbycategories").value === "Office"){  
        var filteredarraybycategory = todo_array.filter(function(searchoffice){
          return (searchoffice.Categories==="Office");
    })
    display_element(filteredarraybycategory);
  }
  else if(document.getElementById("filterbycategories").value === "Personal")
  {    
    var filteredarraybycategory = todo_array.filter(function(searchoffice){
      return (searchoffice.Categories==="Personal");
    })
  display_element(filteredarraybycategory);
  }
}

function filterByStatus(){
  if(document.getElementById("filterbystatus").value === "Status"){
    display_element(todo_array);
  }
 else if(document.getElementById("filterbystatus").value === "Pending")
  {  
    var today = new Date();
    var filteredArrayByStatus= todo_array.filter(function(searchstatus){
      return ((searchstatus.isDone === "Pending") && (new Date(searchstatus.Due_Date) >= today));
    })
    display_element(filteredArrayByStatus);
  }
else if(document.getElementById("filterbystatus").value === "Done")
{    
  var filteredArrayByStatus= todo_array.filter(function(searchstatus){
    return (searchstatus.isDone === "Done");
  })
  display_element(filteredArrayByStatus);
}
}
//Filter by Date
function filterbyDate(){
  var startDate =document.getElementById("sdate").value;
  var endDate = document.getElementById("edate").value;
  var newsDate=new Date(startDate);
  var dDate =new Date(endDate);
    var filterByDate = todo_array.filter(function(searchtime){
      return ((new Date(searchtime.Due_Date) >= newsDate) && (new Date(searchtime.Due_Date) <= dDate));
    })
    var a = document.getElementById("table_body");
    var del = a.lastElementChild;
    while(del){
      a.removeChild(del);
      del = a.lastElementChild;
    }
    display_element(filterByDate);
  }



function done(IdofElement){
  for(var index = 0; index < todo_array.length; index++)
  {
    if(todo_array[index].TodoId == IdofElement){
      todoid = index;
      
      break;  
    }
  }  
  todo_array[index].isDone = "Done";
  user_array = JSON.stringify(user_array);
  localStorage.setItem('userDetails',user_array);
  window.location.reload();
}

function reset_filter(){
  display_element(todo_array);
}