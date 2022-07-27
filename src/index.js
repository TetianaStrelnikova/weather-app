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
  let citycelsiiTemperature = Math.round(response.data.main.temp);
  let citycurrentTemperature = document.querySelector("#current-temperature");
  citycurrentTemperature.innerHTML = `${citycelsiiTemperature}`;
//real feel
  let cityrealFeel = Math.round(response.data.main.feels_like);
  let citycurrentRealFeel = document.querySelector("#real-feel");
  citycurrentRealFeel.innerHTML = `${cityrealFeel}`;
//humidity
  let cityhumidity = response.data.main.humidity;
  let citycurrentHumidity = document.querySelector("#humidity");
  citycurrentHumidity.innerHTML = `${cityhumidity}`;
//wind
  let citywindSpeed = response.data.wind.speed;
  let citycurrentWindSpeed = document.querySelector("#wind-speed");
  citycurrentWindSpeed.innerHTML = `${citywindSpeed}`;

//pressure
  let citypressure = response.data.main.pressure;
  let citycurrentPressure = document.querySelector("#pressure");
  citycurrentPressure.innerHTML = `${citypressure}`;
  console.log(response.data.weather[0].description);
//weather description
   let cityweatherDescription = document.querySelector("#weather-description");
   cityweatherDescription.innerHTML = `${response.data.weather[0].description}`;
//weather icon update
  let locationIdIcon = response.data.weather[0].icon;
 console.log(response.data.weather[0].icon);
  if (locationIdIcon==="01d"){document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-sun");
      } else {
    if (locationIdIcon==="01n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-moon");
      } else {
    if (locationIdIcon==="02d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-sun");
      } else {
    if (locationIdIcon==="02n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-moon");
      } else {
    if  (locationIdIcon==="03d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud");
      } else {
    if (locationIdIcon==="03n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud");  
    } else {
      if (locationIdIcon==="04d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-sun");  
    } else {
      if (locationIdIcon==="04n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-moon");  
    } else {
      if (locationIdIcon==="09d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-showers-heavy");  
    } else {
      if (locationIdIcon==="09n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-moon-rain");  
    } else {
      if (locationIdIcon==="10d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-sun-rain");  
    } else {
      if (locationIdIcon==="10n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-rain");  
    } else {
      if (locationIdIcon==="11d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-bolt");  
    } else {
      if (locationIdIcon==="11n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-bolt");  
    } else {
      if (locationIdIcon==="13d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-snowflake");  
    } else {
      if (locationIdIcon==="13n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-snowflake");  
    } else {
      if (locationIdIcon==="50d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-smog");  
    } else {
      if (locationIdIcon==="50n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-smog");  
    }}}}}}}}}}}}}}}}}}
 
 ;}

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

///get temperature on current location button

function showCurrentPositionTemperature(response) {
  console.log(response);
  //location temperature
  let currentPositionCelsiiTemperature = Math.round(response.data.main.temp);
  let showCurrentPositionCelsiiTemperature = document.querySelector("#current-temperature");
  showCurrentPositionCelsiiTemperature.innerHTML = `${currentPositionCelsiiTemperature}`;
  //city on this geolocation
  let myLocationCity = document.querySelector("#current-city");
  myLocationCity.innerHTML = `${response.data.name}`;
  //weather description
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = `${response.data.weather[0].description}`;
  //real feel
  let locationrealFeel = Math.round(response.data.main.feels_like);
  let currentlocationRealFeel = document.querySelector("#real-feel");
  currentlocationRealFeel.innerHTML = `${locationrealFeel}`;
  //humidity
  let locationhumidity = response.data.main.humidity;
  let currentlocationHumidity = document.querySelector("#humidity");
  currentlocationHumidity.innerHTML = `${locationhumidity}`;
  //wind
  let locationwindSpeed = response.data.wind.speed;
  let currentlocationWindSpeed = document.querySelector("#wind-speed");
  currentlocationWindSpeed.innerHTML = `${locationwindSpeed}`;
  //pressure
  let locationpressure = response.data.main.pressure;
  let currentlocationPressure = document.querySelector("#pressure");
  currentlocationPressure.innerHTML = `${locationpressure}`;
  //weather description
  let locationweatherDescription = document.querySelector("#weather-description");
  locationweatherDescription.innerHTML = `${response.data.weather[0].description}`;

//icon
let locationIdIcon1 = response.data.weather[0].icon;

  if (locationIdIcon1==="01d"){document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-sun");
      } else {
    if (locationIdIcon1==="01n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-moon");
      } else {
    if (locationIdIcon1==="02d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-sun");
      } else {
    if (locationIdIcon1==="02n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-moon");
      } else {
    if  (locationIdIcon1==="03d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud");
      } else {
    if (locationIdIcon1==="03n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud");  
    } else {
      if (locationIdIcon1==="04d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-sun");  
    } else {
      if (locationIdIcon1==="04n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-moon");  
    } else {
      if (locationIdIcon1==="09d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-showers-heavy");  
    } else {
      if (locationIdIcon1==="09n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-moon-rain");  
    } else {
      if (locationIdIcon1==="10d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-sun-rain");  
    } else {
      if (locationIdIcon1==="10n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-rain");  
    } else {
      if (locationIdIcon1==="11d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-bolt");  
    } else {
      if (locationIdIcon1==="11n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-cloud-bolt");  
    } else {
      if (locationIdIcon1==="13d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-snowflake");  
    } else {
      if (locationIdIcon1==="13n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-snowflake");  
    } else {
      if (locationIdIcon1==="50d") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-smog");  
    } else {
      if (locationIdIcon1==="50n") {document.querySelector("#current-city-weather-icon").classList.replace("fa-cloud-bolt","fa-smog");  
    }}}}}}}}}}}}}}}}}}
 
  
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
  let celsiiTemperature = 59;
  let farenheitTemperature = Math.round((celsiiTemperature * 9) / 5 + 32);
  console.log(farenheitTemperature);
  let currentFarenheitTemperature = document.querySelector(
    "#current-temperature"
  );
  currentFarenheitTemperature.innerHTML = `${farenheitTemperature}`;
  let currentFarenheitTemperatureClass = document.querySelector(
    ".currentTemperature"
  );
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



    