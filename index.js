function formatDate(date) {
    let now = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // let day = date.getDay();
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
    

function displayTemperature(response) {
    console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

//Search for a city

function search(city) {
let apiKey = "748628bc1246543ec7234048e2b022c6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#searchInput");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
  
function displayCelsiusTemperature(event) {
      event.preventDefault();
      let temperatureElement = document.querySelector("#temperature");
    
      celsiusLink.classList.add("active");
      fahrenheitLink.classList.remove("active");
      let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
      temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

// Conversion
function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);  