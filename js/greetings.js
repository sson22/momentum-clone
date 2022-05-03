const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//Once the form is submitted, onSubmit function is executed
function onSubmit(event){
    //Prevent default behavior of event on browser
    event.preventDefault();
    const username = loginInput.value;
    //Use local storage API to save the username and remember it next time
    localStorage.setItem(USERNAME_KEY, username);
    //After the form is submitted, hide the form.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    renderGreetings(username);
}

//Show greeting
function renderGreetings(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
//Eventlistener watches Submit event of the form
loginForm.addEventListener("submit", onSubmit)

//If username exists on local storage show greeting, otherwise show input form
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
    renderGreetings(savedUsername);
}

