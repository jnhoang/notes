angular
.module('TravelSensei')
.controller('SignupCtrl', [
  '$scope',
  'UserFactory',
  'AlertsFactory',
  '$state',
  function($scope, UserFactory, AlertsFactory, $state) {
    // PUBLIC VARIABLES & FUNCTIONS
    $scope.user = user;
    $scope.userSignup = userSignup;
    
    //PRIVATE VARIABLES & FUNCTIONS
    var user = {
      email: '',
      password: '',
      homeAirport: '',
    }
    function userSignup() {
      // saves home airport as capital letters
      $scope.user.homeAirport = $scope.user.homeAirport.toUpperCase();

      UserFactory.userSignup($scope.user)
      .then(
        function success(res) {
          $state.go('home');
        },
        function error(err) {
          AlertsFactory.add('error', err.data.message)
        }
      )
    }
  }
]);