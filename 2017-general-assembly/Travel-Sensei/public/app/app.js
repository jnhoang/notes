angular
.module('TravelSensei', ['ui.router', 'ParallaxMod'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    //Routing
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl:'app/views/home.html'
    })
    .state('cities', {
      url: '/cities',
      templateUrl: 'app/views/cities.html',
      controller: 'CitiesCtrl'
    })
    .state('city', {
      url: '/cities/:id',
      templateUrl: 'app/views/singleCity.html', 
      controller: 'CityCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/views/userSignup.html',
      controller: 'SignupCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/views/userLogin.html',
      controller: 'LoginCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    })
    
    $locationProvider.html5Mode(true);

  }])





