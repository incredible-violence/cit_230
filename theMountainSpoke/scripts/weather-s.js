var currentDescription = document.getElementById('description');
var currentTemp = document.getElementById('currentTemp');
var humidity = document.getElementById('humid');
var windSpeed = document.getElementById('wSpeed');
var windChill = document.getElementById('wChill');

var section = document.querySelector('section');
var request = new XMLHttpRequest();
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&id=4787117&APPID=730b3cec46dc7b978148ef8497b33d16';
request.open('GET', requestURL, true);
// request.responseType = 'json';
request.send();
request.onload = function() {
    // get weather data from API
    let weatherData = JSON.parse(request.responseText);
    // get image from API
    let imagessrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    // put image into place prepared for it in HTML page
    document.getElementById('weatherImage').src = imagessrc;
    // log for error checking
    console.log(weatherData);
    // write data into table using function below
    showWeather(weatherData);
}

function showWeather(jsonObj) {
    var weather = jsonObj;

    currentDescription.innerHTML = weather.weather[0].main;
    currentTemp.innerHTML = weather.main.temp;
    humidity.innerHTML = weather.main.humidity;
    windSpeed.innerHTML = weather.wind.speed;
    windChill.innerHTML = weather.wind.deg;
}
