var section = document.querySelector('section');
/* STORE URL OF THE JSON WE WANT */
var requestURL = 'https://api.myjson.com/bins/1h2tw6';
// request creation
var request = new XMLHttpRequest();
// open method
request.open('GET', requestURL);
// response governance
request.responseType = 'json';
request.send();
// function
request.onload = function() {
    var towns = request.response;
    showTowns(towns);
}

function showTowns(jsonObj) {
    var townNames = jsonObj['towns'];

    for (var i = 0; i < townNames.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = townNames[i].name;
        myPara1.textContent = 'Motto: ' + townNames[i].motto;
        myPara2.textContent = 'Year Founded: ' + townNames[i].yearFounded;
        myPara3.textContent = 'Current Population: ' + townNames[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall: ' + townNames[i].averageRainfall;

        //    var townEvents = townNames[i].events;
        //    for (var j = 0; j < townEvents.length; j++) {
        //        var listItem = document.createElement('li');
        //        listItem.textContent = townEvents[j];
        //        myList.appendChild(listItem);
        //    }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
