angular
.module('FlyApp')
.controller('UpdatePlaneCtrl', [
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
    // load plane details on page load
    planeDetail();

    // PUBLIC VARIABLES
    $scope.planeInfo;

    // PUBLIC FUNCTIONS
    $scope.updateDetails = updateDetails;

    // PRIVATE VARIABLES
    var planeInfo;

    // PRIVATE FUNCTIONS
    // db call to get plane info
    function planeDetail() {
      PlanesAPI.getPlane($stateParams.id)
      .then(function(res) {
        planeInfo = res.data;
        $scope.planeInfo = planeInfo;
      })
      .catch(errorHandler);
    }

    // db call to update info
    function updateDetails() {
      var id = planeInfo._id;
      PlanesAPI.updatePlane(id, planeInfo)
      .then(function(res) {
        $state.go('plane', {id:id});        
      })
      .catch(errorHandler);
    }

    function errorHandler(err) {
      console.log('error', err)
    }
  }
]);