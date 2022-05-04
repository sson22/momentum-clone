function GeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //Use weather API to get weather information on given coordinate
    const url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
    fetch(url)
      .then((response)=> response.json())
      .then((data)=>{
        console.log(data)
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
