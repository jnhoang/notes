angular.module('ParallaxMod', ['duParallax'])
.controller('CitiesCtrl', [
	'$scope',
  '$location', 
  'parallaxHelper',
  'YelpFactory',
	function($scope, $location, parallaxHelper, YelpFactory){
    $scope.background = parallaxHelper.createAnimator(-0.7);

    // PUBLIC VARIABLES AND FUNCTIONS
    $scope.searchTerm;
    $scope.getCity = getCity;

    // PRIVATE VARIABLES AND FUNCTIONS
    function getCity() {
      $location.path('/cities/' + $scope.searchTerm);
    }
  }
])
