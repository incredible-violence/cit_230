
var d = new Date();
var month = d.getMonth();
var year = d.getYear();
var dayN = d.getDay();
var day = d.getDate();

var weekDay = new Array(7);
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";

var monthNames = new Array(12);
monthNames[0]  = "January";
monthNames[1]  = "February";
monthNames[2]  = "March";
monthNames[3]  = "April";
monthNames[4]  = "May";
monthNames[5]  = "June";
monthNames[6]  = "July";
monthNames[7]  = "August";
monthNames[8]  = "September";
monthNames[9]  = "October";
monthNames[10] = "November";
monthNames[11] = "December";

var dayName = weekDay[dayN];
var monthName = monthNames[month];
var actualYear = year + 1900;

var today = '  ' + dayName + ', ' + day + ' ' + monthName + ' ' + actualYear;

document.getElementById('currentdate').innerHTML = today;

