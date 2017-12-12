function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(56.9502134,24.1063406),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
          position: new google.maps.LatLng(56.9502134,24.1063406),
          map: map,
          title: 'Hello World!'
        });
}
