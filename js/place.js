export class Place {
  constructor (latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export function location(place) {
  var userLatLng = new google.maps.LatLng(place.latitude, place.longitude);

  var myOptions = {
    zoom : 5,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  console.log(mapObject);
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

export function kelvinToCelcius(number) {
  return Math.floor(number - 273.15);
}
