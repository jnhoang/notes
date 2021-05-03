angular.module('FlyApp')
.factory('PlanesAPI', ['$http', function($http){ 
  return {
    //function declarations
    getPlanes:    getPlanes,
    getPlane:     getPlane,
    addPlane:     addPlane,
    deletePlane:  deletePlane,
    updatePlane:  updatePlane
  }

  // functions
  function getPlanes() {
    return $http.get('/api/airplanes');
  }
  function getPlane(id) {
    return $http.get('/api/airplanes/' + id);
  }
  function addPlane(plane) {
    return $http.post('/api/airplanes', plane);
  }
  function deletePlane(id) {
    return $http.delete('/api/airplanes/' + id);
  }
  function updatePlane(id, plane) {
    return $http.put('/api/airplanes/' + id, plane);
  }
}]);
