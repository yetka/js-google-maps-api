var apiKey = require('./../.env').apiKey;
import { Place } from './../js/place.js';

$(document).ready(function() {
  $("#coordinates-form").submit(function(event) {
    event.preventDefault();

    let latitude = $("#latitude").val();
    let longitude = $("#longitude").val();
    let newPlace = new Place(latitude, longitude);

    function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }

  });
});
