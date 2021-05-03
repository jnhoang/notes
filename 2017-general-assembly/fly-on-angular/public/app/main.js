angular
.module('FlyApp', ['ui.router'])
.config([
  '$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider', 
  function(
    $stateProvider, 
    $urlRouterProvider, 
    $locationProvider
  ) {
    // Routing
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/planes.html',
      controller: 'PlanesCtrl'
    })
    .state('addPlane', {
      url: '/plane/addPlane',
      templateUrl: 'app/views/addPlane.html',
      controller: 'AddPlaneCtrl'
    })
    .state('deletePlane', {
      url: '/plane/delete',
      controller: 'DeletePlaneCtrl'
    })
    .state('updatePlane', {
      url: '/plane/update/:id',
      templateUrl: 'app/views/updatePlane.html',
      controller: 'UpdatePlaneCtrl'
    })
    .state('plane', {
      url: '/plane/:id',
      templateUrl: 'app/views/details.html',
      controller: 'DetailCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    })

    $locationProvider.html5Mode(true);
}]);
