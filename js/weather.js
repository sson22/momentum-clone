const API_KEY = "5cc85e06d1cf14300927ef0ade91e04b";


function GeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //Use weather API to get weather information on given coordinate
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response)=> response.json())
      .then((data)=>{

        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `weather: ${data.weather[0].main}, temp: ${data.main.temp}`;
        
        })
}

function GeoError(){
    alert("Can't find you. No weather for you.");
}
//When success on getting current position, call GeoOk, if it fails call GeoError
navigator.geolocation.getCurrentPosition(GeoOk, GeoError);