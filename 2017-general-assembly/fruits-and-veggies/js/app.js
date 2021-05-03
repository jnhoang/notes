/* setup your angular app here */
var app = angular.module('FruitNVeggies', []);

app.controller('FruitVeggies', ['$scope', function($scope) {
	$scope.fruits = [];
	$scope.veggies = [];
	$scope.storage = {};
	$scope.combined = fruits.concat(vegetables).sort(function() {
		return 0.5 - Math.random() 
		
	});

	$scope.move = function(direction) {
		switch (direction) {
			case 'toFruits':
				$scope.fruits.push($scope.combined.splice(this.$index, 1)[0]);
				break;
			case 'toVeggies':
				$scope.veggies.push($scope.combined.splice(this.$index, 1)[0]);
				break;
			case 'fromFruits':
				$scope.combined.push($scope.fruits.splice(this.$index,1)[0]);
				break;
			case 'fromVeggies':
				$scope.combined.push($scope.veggies.splice(this.$index,1)[0]);
				break;
		}
		check();
	}

	function check() {
		if ($scope.combined == 0) {
			$scope.fruits.forEach(function(fruit) {
				$scope.storage[fruit] = fruits.includes(fruit) ? 'green' : 'red';
			});
			$scope.veggies.forEach(function(veggie) {
				$scope.storage[veggie] = vegetables.includes(veggie) ? 'green' : 'red';
			});
			checkWin()
		}
	}

	function checkWin() {
		for (thing in $scope.storage) {
			if ($scope.storage[thing] == 'red') {
				setTimeout(function() { alert('You Lose'); }, 500);
				return;
			}
		}
		setTimeout(function() { alert('You Win'); }, 500);
	}
}])