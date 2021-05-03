angular
.module('FlyApp')
.controller('PlanesCtrl', [
  '$scope',
  'PlanesAPI', 
  function(
    $scope, 
    PlanesAPI
  ) {
    
    // Show all planes on page load
    getPlanes();

    // PUBLIC VARIABLES
    $scope.title    = 'Look at all my planes!';
    $scope.planes   = [];

    // PUBLIC FUNCTIONS
    $scope.deletePlane = deletePlane;

    
    // PRIVATE FUNCTIONS
    // Show all planes
    function getPlanes() {
      PlanesAPI.getPlanes()
      .then(function(res) {
        $scope.planes = res.data;
      })
      .catch(errorHandler);
    }

    // Delete a plane from the db
    function deletePlane(id) {
      PlanesAPI.deletePlane(id)
      .then(function() {
        window.location.replace('');
      })
      .catch(errorHandler);
    }

    function errorHandler(err) {
      console.log('errr', err);
    }
}]);