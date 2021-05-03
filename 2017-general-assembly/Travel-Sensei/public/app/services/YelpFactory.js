angular
.module('TravelSensei')
.factory('YelpFactory', [
  '$http',
  function($http) {
    return {
      // function declaration
      getCity: getCity,
    }

    //functions
    function getCity(city) {
      return $http.get('/cities/data/' + city);
    }

  }
]);