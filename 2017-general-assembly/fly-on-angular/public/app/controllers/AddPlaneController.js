angular
.module('FlyApp')
.controller('AddPlaneCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'PlanesAPI',
  function(
    $scope,
    $state,
    $stateParams,
    PlanesAPI
  ) {
    // PUBLIC VARIABLES
    $scope.planeForm = {};

    // PUBLIC FUNCTIONS
    $scope.addPlane = addPlane;

    // Add a plane
    function addPlane() {
      PlanesAPI.addPlane($scope.planeForm)
      .then(function(res) {
        console.log(res);
        console.log('successful add!');
        $state.go('plane', {id:res.data._id});
        //return res.data;
      })
      .catch(function(err) {
        console.log(err);
        console.log('error!');
        //return null;
      });
    }
  }
]);



