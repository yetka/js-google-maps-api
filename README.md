# Geographic Coordinate System

#### It's an application that takes coordinates from a user and shows the position on the map and displays information about that place.

#### By Malgorzata Haniszewska

## Description
A geographic coordinate system is a system used in geography that enables every location on Earth to be specified by a set of numbers. This applications allows user to provide to numbers from a specific range as longitude and latitude. Then it displays the place connected to this coordinates on the map and provides information about the nearest city (city name, country, actual temperature in Celcius degrees and actual weather). It uses API request from to following webpages:
* http://www.geonames.org/
* http://www.openweathermap.org/
* https://developers.google.com/maps/

## Setup/Installation Requirements

* Clone GitHub repository to your personal device using terminal command $ git clone https://github.com/yetka/js-google-maps-api
* go to root directory of this project
* run $ npm install
* run $ bower install
* in root directory of this project create .env file using command $ touch .env
* go to http://www.openweathermap.org/ and apply for your apiKey, then implement it to .env file:
  exports.apiKey = "[yourApiKeyHere]";
* go to http://www.geonames.org/ and create account to get user name, then implement it to .env file:
  exports.apiUserName = "[yourUserNameHere]";
* run $ gulp build
* run $ gulp serve


## Support and contact details

Contact email: gosia.haniszewska@gmail.com

## Technologies Used

* HTML
* CSS
* javascript
* Node
* Jasmine and Karma
* ES6
* AJAX

### License

This project is licensed under the MIT License.
