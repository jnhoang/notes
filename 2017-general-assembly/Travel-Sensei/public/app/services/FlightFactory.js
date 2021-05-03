angular
.module('TravelSensei')
.factory('FlightFactory', [
  '$http',
  function($http) {
    return {
      // function declaration
      getCity: getCity,
    }

    //functions
    function getCity(city) {
      return $http.get('/cities/' + city + '/flightdata');
    }

  }
]);