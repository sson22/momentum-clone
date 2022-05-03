const clock = document.querySelector("h2#clock"); 

function getClock(){
    const date = new Date();
    //Set time format as 00:00:00 
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//Display time once webpage is loaded without delay (for arg2 ms)
getClock();
//Execute a function(arg1) every certain time(arg2) ms
setInterval(getClock, 1000);

