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
  event.preventDefault();
  //temperature
  let celsiiTemperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${celsiiTemperature}`;
  //real feel
  let realFeel = Math.round(response.data.main.feels_like);
  let currentRealFeel = document.querySelector("#real-feel");
  currentRealFeel.innerHTML = `${realFeel}`;
  //humidity
  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${humidity}`;
  //wind
  let windSpeed = response.data.wind.speed;
  let currentWindSpeed = document.querySelector("#wind-speed");
  currentWindSpeed.innerHTML = `${windSpeed}`;

  //pressure
  let pressure = response.data.main.pressure;
  let currentPressure = document.querySelector("#pressure");
  currentPressure.innerHTML = `${pressure}`;
}
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
  let currentPositionCelsiiTemperature = Math.round(response.data.main.temp);
  let showCurrentPositionCelsiiTemperature = document.querySelector(
    "#current-temperature"
  );
  showCurrentPositionCelsiiTemperature.innerHTML = `${currentPositionCelsiiTemperature}`;
  console.log(response.data.name);
  let myLocationCity = document.querySelector("#current-city");
  myLocationCity.innerHTML = `${response.data.name}`;



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





}
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

//current city temperature search and innerHTML

//let currentCity = document.querySelector("#change-city-form");
//currentCity.addEventListener("submit", changeCity);