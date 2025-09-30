

 function addTask(){
    var inputElement=document.getElementById("tasks");
    if(inputElement.value===""){
        alert("Enter your task please");
    }
    else{
var newElement=document.createElement("li");
newElement.innerHTML=inputElement.value;


var ulList=document.getElementById("tasksList");
 ulList.appendChild(newElement);

 var editButton=document.createElement("button");
 editButton.innerHTML="Edit";
editButton.onclick=function(){
    var windowInput=window.prompt("Edit Your Task");
  newElement.innerHTML=windowInput;
}
ulList.appendChild(editButton);

 var deleteButton=document.createElement("button");
 deleteButton.onclick=function(){
    var confirmation=window.confirm("Are you sure you want to delete the task");
    if(confirmation==true){
 newElement.remove();
    editButton.remove();
    deleteButton.remove();
      doneButton.remove();
    }
   
 }


 
ulList.appendChild(deleteButton);
 deleteButton.innerHTML="Delete";

 var doneButton=document.createElement("button");
doneButton.innerHTML="done";
ulList.appendChild(doneButton);
doneButton.onclick=function(){
    alert("hooray! You have completed this task");
    newElement.remove();
        editButton.remove();
    deleteButton.remove();
    doneButton.remove();
}

newElement.style.color="#EAE6E1";
newElement.style.fontSize="27px";



 deleteButton.style.backgroundColor="#7f78d2";
 deleteButton.style.color=" #f5f6fa";
 deleteButton.style.borderRadius="0 8px 8px 0";


 editButton.style.color="#f5f6fa";
 editButton.style.backgroundColor="#7f78d2";
 editButton.style.borderRadius="0 8px 8px 0";

 doneButton.style.color="#f5f6fa";
 doneButton.style.backgroundColor="#7f78d2";
 doneButton.style.borderRadius="0 8px 8px 0";

    
editButton.style.marginLeft="-40px";

    }

 }