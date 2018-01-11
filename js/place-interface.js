import { Place } from './../js/place.js';
import { location } from './../js/place.js';
var apiUserName = require('./../.env').apiUserName;


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


    $(".map-view").show();
    $(".location-info").show();
  });
});
