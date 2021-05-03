angular
.module('TravelSensei')
.controller('NavCtrl', [
  '$scope',
  '$location',
  'AlertsFactory',
  'AuthFactory',
  'UserFactory',
  '$state',
  function($scope, $location, AlertsFactory, AuthFactory, UserFactory, $state) {
    // PUBLIC VARIABLES & FUNCTIONS
    $scope.isLoggedIn = isLoggedIn;
    $scope.logout = logout;  
    $scope.user = user;
    $scope.userLogin = userLogin;

  
    // PRIVATE VARIABLES & FUNCTIONS
    var user = {
      email: '',
      password: ''
    };
    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btnLogin = document.getElementById("login");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    
    // When the user clicks on the button, open the modal 
    btnLogin.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }  
    function userLogin() {
      UserFactory.userLogin($scope.user)
      .then(
        function success (res) {
          AuthFactory.saveToken(res.data.token);
          AlertsFactory.add('success', 'You are now logged in!');
          $state.go('home');
          modal.style.display = "none";
        },
        function error (err) {
          AlertsFactory.add('error', err.data.message);
        }
      )
    }
    function userSignup() {
      console.log($scope.user)
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
    function isLoggedIn() {
      return AuthFactory.isLoggedIn();
    };
    function logout() {
      AuthFactory.removeToken();
      AlertsFactory.add('success', 'You are now logged out');
      $location.path('/');
    }
  }
]);
