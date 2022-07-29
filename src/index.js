//Real date
let date = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[date.getDay()];
let newWeek = document.querySelector("#week");
newWeek.innerHTML = `${day} `;

let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
let month = months[date.getMonth()];
let dateNow = date.getDate();
let newDate = document.querySelector("#current-date");
newDate.innerHTML = `${month}/${dateNow}`;
function getHours(date) {
  let hours = date.getHours();
  if (hours < 10) {
    return `0${hours}`;
  } else {
    return `${hours}`;
  }
}

function getMinutes(date) {
  let currentMinutes = date.getMinutes();

  if (currentMinutes < 10) {
    return `0${currentMinutes}`;
  } else {
    return `${currentMinutes}`;
  }
}
let newTime = document.querySelector("#current-time");
newTime.innerHTML = `${getHours(date)}:${getMinutes(date)}`;
//🕵city and temp

//done, changes city to the city input value
function changeCity(event) {
  event.preventDefault();
  let currentCityInput = document.querySelector("#change-city-input");
  let newCity = document.querySelector("#current-city");
  newCity.innerHTML = `${currentCityInput.value}`;
}
//done,get response from axis and change HTML temperature...
  function searchTemperature(response) {

//temperature
  let citycurrentTemperature = document.querySelector("#current-temperature");
  citycurrentTemperature.innerHTML = `${Math.round(response.data.main.temp)}`;
  celsiiTemperatureForChangingFunction =Math.round(response.data.main.temp);
//real feel
  let citycurrentRealFeel = document.querySelector("#real-feel");
  citycurrentRealFeel.innerHTML = `${Math.round(response.data.main.feels_like)}`;
//humidity
  let citycurrentHumidity = document.querySelector("#humidity");
  citycurrentHumidity.innerHTML = `${response.data.main.humidity}`;
//wind
  let citycurrentWindSpeed = document.querySelector("#wind-speed");
  citycurrentWindSpeed.innerHTML = `${response.data.wind.speed}`;
//pressure
  let citycurrentPressure = document.querySelector("#pressure");
  citycurrentPressure.innerHTML = `${response.data.main.pressure}`;
//weather description
   let cityweatherDescription = document.querySelector("#weather-description");
   cityweatherDescription.innerHTML = `${response.data.weather[0].description}`;
//weather icon update
  let locationIdIcon = response.data.weather[0].icon;
  let weatherIcon = document.querySelector("#current-city-weather-icon");
  weatherIcon.classList = "fa-solid";
  if (locationIdIcon === "01d") {
    weatherIcon.classList.add("fa-sun");
  } else if (locationIdIcon === "01n") {
    weatherIcon.classList.add("fa-moon");
  } else if (locationIdIcon === "02d") {
    weatherIcon.classList.add("fa-cloud-sun");
  } else if (locationIdIcon === "02n") {
    weatherIcon.classList.add("fa-cloud-moon");
  } else if (locationIdIcon === "03d") {
    weatherIcon.classList.add("fa-cloud");
  } else if (locationIdIcon === "03n") {
    weatherIcon.classList.add("fa-cloud");
  } else if (locationIdIcon === "04d") {
    weatherIcon.classList.add("fa-cloud-sun");
  } else if (locationIdIcon === "04n") {
    weatherIcon.classList.add("fa-cloud-moon");
  } else if (locationIdIcon === "09d") {
    weatherIcon.classList.add("fa-cloud-showers-heavy");
  } else if (locationIdIcon === "09n") {
    weatherIcon.classList.add("fa-cloud-moon-rain");
  } else if (locationIdIcon === "10d") {
    weatherIcon.classList.add("fa-cloud-sun-rain");
  } else if (locationIdIcon === "10n") {
    weatherIcon.classList.add("fa-cloud-rain");
  } else if (locationIdIcon === "11d") {
    weatherIcon.classList.add("fa-cloud-bolt");
  } else if (locationIdIcon === "11n") {
    weatherIcon.classList.add("fa-cloud-bolt");
  } else if (locationIdIcon === "13d") {
    weatherIcon.classList.add("fa-snowflake");
  } else if (locationIdIcon === "13n") {
    weatherIcon.classList.add("fa-snowflake");
  } else if (locationIdIcon === "50d") {
    weatherIcon.classList.add("fa-smog");
  } else if (locationIdIcon === "50n") {
    weatherIcon.classList.add("fa-smog");
  }
 ;}

 let celsiiTemperatureForChangingFunction = null;
//done get weather data from the api
function getTemp(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#change-city-input");
  let citSearchValue = `${citySearch.value}`;
  let apiKey = "1001fa4e051816eb8cb147e5ae4e09c6";
  let searchlink = `https://api.openweathermap.org/data/2.5/weather?q=${citSearchValue}&appid=${apiKey}&units=metric`;
  axios.get(searchlink).then(searchTemperature);
}
let currentCity = document.querySelector("#change-city-form");
currentCity.addEventListener("submit", changeCity);
currentCity.addEventListener("submit", getTemp);

  //get temperature on current location button
  function showCurrentPositionTemperature(response) {
  //location temperature
  let showCurrentPositionCelsiiTemperature = document.querySelector("#current-temperature");
  showCurrentPositionCelsiiTemperature.innerHTML = `${Math.round(response.data.main.temp)}`;
  celsiiTemperatureForChangingFunction = Math.round(response.data.main.temp);
  let myLocationCity = document.querySelector("#current-city");
  myLocationCity.innerHTML = `${response.data.name}`;
  //weather description
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = `${response.data.weather[0].description}`;
  //real feel
  let currentlocationRealFeel = document.querySelector("#real-feel");
  currentlocationRealFeel.innerHTML = `${Math.round(response.data.main.feels_like)}`;
  //humidity
  let currentlocationHumidity = document.querySelector("#humidity");
  currentlocationHumidity.innerHTML = `${response.data.main.humidity}`;
  //wind
  let currentlocationWindSpeed = document.querySelector("#wind-speed");
  currentlocationWindSpeed.innerHTML = `${response.data.wind.speed}`;
  //pressure
  let currentlocationPressure = document.querySelector("#pressure");
  currentlocationPressure.innerHTML = `${response.data.main.pressure}`;
  //weather description
  let locationweatherDescription = document.querySelector("#weather-description");
  locationweatherDescription.innerHTML = `${response.data.weather[0].description}`;
//changing the icon
  let locationIdIcon1 = response.data.weather[0].icon;
  let weatherIcon1 = document.querySelector("#current-city-weather-icon");
  weatherIcon1.classList = "fa-solid";
  if (locationIdIcon1 === "01d") {
    weatherIcon1.classList.add("fa-sun");
  } else if (locationIdIcon1 === "01n") {
    weatherIcon1.classList.add("fa-moon");
  } else if (locationIdIcon1 === "02d") {
    weatherIcon1.classList.add("fa-cloud-sun");
  } else if (locationIdIcon1 === "02n") {
    weatherIcon1.classList.add("fa-cloud-moon");
  } else if (locationIdIcon1 === "03d") {
    weatherIcon1.classList.add("fa-cloud");
  } else if (locationIdIcon1 === "03n") {
    weatherIcon1.classList.add("fa-cloud");
  } else if (1 === "04d") {
    weatherIcon1.classList.add("fa-cloud-sun");
  } else if (locationIdIcon1 === "04n") {
    weatherIcon1.classList.add("fa-cloud-moon");
  } else if (locationIdIconlocationIdIcon1 === "09d") {
    weatherIcon1.classList.add("fa-cloud-showers-heavy");
  } else if (locationIdIcon1 === "09n") {
    weatherIcon1.classList.add("fa-cloud-moon-rain");
  } else if (locationIdIcon1 === "10d") {
    weatherIcon1.classList.add("fa-cloud-sun-rain");
  } else if (locationIdIcon1 === "10n") {
    weatherIcon1.classList.add("fa-cloud-rain");
  } else if (locationIdIcon1 === "11d") {
    weatherIcon1.classList.add("fa-cloud-bolt");
  } else if (locationIdIcon1 === "11n") {
    weatherIcon1.classList.add("fa-cloud-bolt");
  } else if (locationIdIcon1 === "13d") {
    weatherIcon1.classList.add("fa-snowflake");
  } else if (locationIdIcon1 === "13n") {
    weatherIcon1.classList.add("fa-snowflake");
  } else if (locationIdIcon1 === "50d") {
    weatherIcon1.classList.add("fa-smog");
  } else if (locationIdIcon1 === "50n") {
    weatherIcon1.classList.add("fa-smog");
  }
  
  };
function myPosition(position) {
  console.log(position);
  let lat = Math.round(position.coords.latitude);
  let lon = Math.round(position.coords.longitude);
  let apiKey = "1001fa4e051816eb8cb147e5ae4e09c6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentPositionTemperature);
}
function getmyPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(myPosition);
}

let locationButton = document.querySelector("#my-location");
locationButton.addEventListener("click", getmyPosition);

//🙀change celsius to farenheit

function changeToFarenheit(event) {
  event.preventDefault();
  let farenheitTemperature = Math.round((celsiiTemperatureForChangingFunction * 9) / 5 + 32);
  let currentFarenheitTemperature = document.querySelector("#current-temperature");
  currentFarenheitTemperature.innerHTML = `${farenheitTemperature}`;
  let currentFarenheitTemperatureClass = document.querySelector(".currentTemperature");
  currentFarenheitTemperatureClass.classList.remove("currentTemperature");
  currentFarenheitTemperatureClass.classList.add("currentTemperatureNew");
}

let farenheitButton = document.querySelector("#farenheit");
farenheitButton.addEventListener("click", changeToFarenheit);

function changeToCelsii(event) {
  event.preventDefault();
  let fakeFarenheitTemperature = 85;
  let celsiiTemperature = Math.round(((fakeFarenheitTemperature - 32) * 5) / 9);
  console.log(celsiiTemperature);
  let currentCelsiiTemperature = document.querySelector("#current-temperature");
  currentCelsiiTemperature.innerHTML = `${celsiiTemperature}`;
}

let celsiiButton = document.querySelector("#celsii");
celsiiButton.addEventListener("click", changeToCelsii);



    