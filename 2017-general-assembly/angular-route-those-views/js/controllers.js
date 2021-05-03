var app = angular.module('PokemonCtrl', ['PokemonFactory']);

app.controller('PokemonCtrl', [
	'$scope', 
	'$state', 
	'PokemonFactory', 
	'FlavorTextFactory', 
	'$stateParams',
	function(
		$scope, 
		$state, 
		PokemonFactory, 
		FlavorTextFactory,
		$stateParams
		) {
		$scope.name = $stateParams.name;
		$scope.pokemonData;
		$scope.speciesData;
		$scope.pokemonId;
		$scope.evolutionUrl;
		$scope.loading = false;


		$scope.find = function() {
		$scope.loading = true;
		PokemonFactory.get( {name: $scope.name},
			function success(data) {
				$scope.pokemonData = data;
				$scope.pokemonId = $scope.pokemonData.id;
				
				FlavorTextFactory.get( {id: $scope.pokemonId},
					function success(data) {
						$scope.loading = false;
						$scope.speciesData = data;
					},
					function error(data) {
						console.log('error', data);
						$scope.loading = false;
					});
			},
			function error(data) {
				console.log('error', data);
				$scope.loading = false;
			}
		);
	}
	console.log($scope.name)
	$scope.find();
}]);

app.controller('HomeCtrl', [
	'$scope',
	 '$state',
	 function($scope, $state) {
	 	$scope.search = function() {
	 		$state.go('pokemon', {name: $scope.name});
	 	}
	 }])






