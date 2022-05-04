const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//Set item list
let toDos = [];
const TODOS_KEY = "todos"; 

//Save todo list on local storage
function saveTodos(){
    //Save toods array as string form
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//Delete single to-do item
function deleteToDo(event){
    //Detect which button was clicked and fetch information of the item needs to be deleted
    const li = event.target.parentElement;
    li.remove();
    //Update toDos array to update local storage
    toDos = toDos.filter((item)=>item.id !== parseInt(li.id));
    saveTodos();
}
//Render list on HTML
function renderToDo(newToDo){
    //Create new elements <li></li> <span></span>
    const li = document.createElement("li");
    //Set id for li item
    li.id = newToDo.id;
    const span = document.createElement("span");
    //Place to do item on span
    span.innerText = newToDo.text;
    //Create button element
    const button = document.createElement("button");
    button.innerText = "delete";
    //when button is clicked, delete the element
    button.addEventListener("click", deleteToDo);
    //place span and button element inside of li element <li><span></span><button></button></li>
    li.appendChild(span);
    li.appendChild(button);
    //Place li inside of toDoList <ul></ul>
    toDoList.appendChild(li);

}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    //initialise the toDoInput value
    toDoInput.value = "";
    //add todo item(as an object) to todo list
    const newTodoObj = {
        text:newToDo,
        id: Date.now() //set random id
    };
    toDos.push(newTodoObj);
    renderToDo(newTodoObj);
    saveTodos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);
//fetch todo-list stored in local storage
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos!==null){
    //Convert string form to the original form
   const parsedToDos = JSON.parse(savedToDos); 
   toDos = parsedToDos;
   parsedToDos.forEach(renderToDo);
}