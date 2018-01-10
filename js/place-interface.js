var apiKey = require('./../.env').apiKey;
import { Place } from './../js/place.js';

$(document).ready(function() {
  $("#coordinates-form").submit(function(event) {
    event.preventDefault();

    let latitude = parseInt($("#latitude").val());
    let longitude = parseInt($("#longitude").val());
    let newPlace = new Place(latitude, longitude);

    function location(place) {
      var userLatLng = new google.maps.LatLng(place.latitude, place.longitude);

      var myOptions = {
        zoom : 16,
        center : userLatLng,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      };
      var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
      new google.maps.Marker({
        map: mapObject,
        position: userLatLng
      });
    }

    location(newPlace);
  });
});
