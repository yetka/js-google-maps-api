var apiKey = require('./../.env').apiKey;
import { Place } from './../js/place.js';
import { location } from './../js/place.js';

$(document).ready(function() {
  $("#coordinates-form").submit(function(event) {
    event.preventDefault();

    let latitude = parseInt($("#latitude").val());
    let longitude = parseInt($("#longitude").val());
    let newPlace = new Place(latitude, longitude);

    location(newPlace);
  });
});
