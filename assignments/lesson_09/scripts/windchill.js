var speed = document.getElementById('windSpeed').innerHTML;
var hTemp = document.getElementById('hiTmp').innerHTML;
var lTemp = document.getElementById('loTmp').innerHTML;
var hTempN = parseInt(hTemp);
var lTempN = parseInt(lTemp);

var temp = (hTempN + lTempN) / 2;

var windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temp * Math.pow(speed, 0.16)));

document.getElementById('windChill').innerHTML = windChill.toFixed(2);
