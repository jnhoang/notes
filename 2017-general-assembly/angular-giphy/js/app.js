angular
  .module('GiphyApp', [])
  .controller('searchCtrl', [
    '$scope', 
    '$http',
    function (
      $scope,
      $http){

      // public variables
      $scope.searchTerm = '';
      $scope.results;

      // public functions
      $scope.search = search;

      // private functions
      function search(){
        // declare config for giphy search
        var req = {
          url: 'http://api.giphy.com/v1/gifs/search?',
          method: 'GET',
          params: {
            q: $scope.searchTerm,
            api_key: 'dc6zaTOxFJmzC'
          }
        }

        $http(req).then(
          function success(res) {
            $scope.results = res.data.data;
            console.log($scope.results );
          },
          function error(res) {
            console.log('tehre was an error', res)
          }
        );
      }
  }]);
