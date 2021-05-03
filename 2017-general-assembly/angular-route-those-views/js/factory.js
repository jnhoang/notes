var app = angular.module('PokemonFactory', ['ngResource']);
app.factory('PokemonFactory', ['$resource', function($resource){
	var url = 'http://pokeapi.co/api/v2/pokemon/:name';

	return $resource(url, {}, {
    	query: { 
    		isArray: false
    	}
	});
}]);

app.factory('FlavorTextFactory', ['$resource', function($resource) {
	var url = 'http://pokeapi.co/api/v2/pokemon-species/:id';

	return $resource(url, {}, {
		query: {
			isArray: false
		}
	});
}]);