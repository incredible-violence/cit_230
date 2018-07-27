// where we want the information displayed
var section = document.querySelector('section');
// reference to tours information at MYJSON
var requestURL = 'https://api.myjson.com/bins/6pw9u';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();
// function
request.onload = function() {
    var tours = request.response;
    showTours(tours);
}

function showTours(jsonObj) {
    var tours = jsonObj['adventures'];

    for (var i = 0; i < tours.length; i++) {
        // create elements
        var article = document.createElement('article');
        var h2 = document.createElement('h2');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        var p4 = document.createElement('p');
        // fill elements
        h2.textContent = tours[i].name;
        p1.textContent = 'Length: ' + tours[i].length;
        p2.textContent = 'Skill Level: ' + tours[i].skill;
        p3.textContent = 'Cost: ' + tours[i].cost;
        p4.textContent = 'Starting Point: ' + tours[i].location;
        // append elements
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);

        section.appendChild(article);
    }
}
