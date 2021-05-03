angular
.module('FlyApp')
.controller('DetailCtrl', [
  '$scope',
  '$stateParams',
  'PlanesAPI',
  function(
    $scope,
    $stateParams,
    PlanesAPI
  ) {
    // show info on a single plane on page load
    planeDetail();

    // PUBLIC VARIABLES
    $scope.plane  = {};

    // PRIVATE FUNCTIONS
    // get info on a single plane
    function planeDetail() {
      PlanesAPI.getPlane($stateParams.id)
      .then(function(res) {
        $scope.plane = res.data;
      })
      .catch(function(err) {
        console.log('error', err);  
      });   
    }
  }
]);