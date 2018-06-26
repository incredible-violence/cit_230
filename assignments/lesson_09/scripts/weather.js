var section = document.querySelector('section');
var request = new XMLHttpRequest();
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&id=4156210&APPID=730b3cec46dc7b978148ef8497b33d16';
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

    var myTable = document.createElement('table');
    var row1 = document.createElement('tr');
    var highTempLabel = document.createElement('th');
    var highTempContent = document.createElement('td');
    var row2 = document.createElement('tr');
    var lowTempLabel = document.createElement('th');
    var lowTempContent = document.createElement('td');
    var row3 = document.createElement('tr');
    var precipLabel = document.createElement('th');
    var precipContent = document.createElement('td');
    var row4 = document.createElement('tr');
    var windSpeedLabel = document.createElement('th');
    var windSpeedContent = document.createElement('td');
    var row5 = document.createElement('tr');
    var windChillLabel = document.createElement('th');
    var windChillContent = document.createElement('td');

    highTempLabel.textContent = 'High:';
    highTempContent.textContent = weather.main.temp_max;
    lowTempLabel.textContent = 'Low:';
    lowTempContent.textContent = weather.main.temp_min;
    precipLabel.textContent = 'Humidity:';
    precipContent.textContent = weather.main.humidity;
    windSpeedLabel.textContent = 'Wind Speed:';
    windSpeedContent.textContent = weather.wind.speed;
    windChillLabel.textContent = 'Wind Chill:';
    windChillContent.textContent = weather.wind.deg;

    myTable.appendChild(row1);
    myTable.appendChild(highTempLabel);
    myTable.appendChild(highTempContent);
    myTable.appendChild(row2);
    myTable.appendChild(lowTempLabel);
    myTable.appendChild(lowTempContent);
    myTable.appendChild(row3);
    myTable.appendChild(precipLabel);
    myTable.appendChild(precipContent);
    myTable.appendChild(row4);
    myTable.appendChild(windSpeedLabel);
    myTable.appendChild(windSpeedContent);
    myTable.appendChild(row5);
    myTable.appendChild(windChillLabel);
    myTable.appendChild(windChillContent);

    section.appendChild(myTable);
}
