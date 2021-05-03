var app = angular.module('PokemonApp', ['PokemonCtrl', 'ui.router']);

console.log('app.js running')

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl',
	})
	.state('pokemon', {
		url: '/pokemon/:name',
		templateUrl: 'views/pokemon.html',
		controller: 'PokemonCtrl'
	});

}]);





