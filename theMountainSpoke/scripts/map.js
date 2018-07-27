function intitMap() {
    // bozeman, MT map
    var bozeman = {lat: 45.6770, lng: 111.0429 };
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: bozeman });
    var marker = new google.maps.Marker({position: bozeman, map: map});
}
