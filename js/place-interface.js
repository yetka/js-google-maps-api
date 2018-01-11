import { Place } from './../js/place.js';
import { location } from './../js/place.js';
import { kelvinToCelcius } from './../js/place.js';
var apiUserName = require('./../.env').apiUserName;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $("#coordinates-form").submit(function(event) {
    event.preventDefault();

    let latitude = parseFloat($("#latitude").val());
    $("#latitude").val("");
    let longitude = parseFloat($("#longitude").val());
    $("#longitude").val("");
    let newPlace = new Place(latitude, longitude);

    location(newPlace);

    $.ajax({
      url: `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}&username=${apiUserName} `,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#name').text(response.geonames[0].name);
        $('#country').text(response.geonames[0].countryName);
      },

      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let kelvins = response.main.temp;
        let celcius = kelvinToCelcius(kelvins);
        $('#temperature').text(celcius);
        $('#weather').text(response.weather[0].description);
      },

      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });


    $(".map-view").show();
    $(".location-info").show();
  });
});
