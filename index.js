//Current Date

function formatDate(date) {
    let now = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];

    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    
    if (currentHours < 10) {
        currentHours = "0" + currentHours;
    }
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    
    let dateAndTime = document.querySelector("#currentDateAndTime");
    let currentDate = dateAndTime.innerHTML = `${day}, ${currentHours}:${currentMinutes}`; 

    return currentDate;
};
formatDate();
    

//Search for a city

function showTheCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#input");
    let city = document.querySelector("#city");
    // console.log(city.value);
    let units = "metric";
    let cityName = city.innerHTML = searchInput.value;
    let apiKey = "748628bc1246543ec7234048e2b022c6";
    let geolocationApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;
    axios.get(geolocationApi).then( displayWeather);
}
let form = document.querySelector("#searchCity");
// console.log(form);
form.addEventListener("submit", showTheCity);

function getCurrentLocation(){
    navigator.geolocation.getCurrentPosition(showPosition);
}

//Temperature
function displayWeather(responce) {
    console.log(responce);
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(responce.data.main.temp) + " °C";
    let city = document.querySelector("#city");
     city.innerHTML = responce.data.name; 
}

// function displayWind(wind_responce) {
//     console.log(wind_responce);
// }
// displayWeather();

// Location
// function showPosition(position) {
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     let apiKey = "748628bc1246543ec7234048e2b022c6";
//     let units = "metric";
//     let geolocationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
//     axios.get(`${geolocationApi}&appid=${apiKey}`).then( displayWeather);
    // console.log(position.data.name);
// }