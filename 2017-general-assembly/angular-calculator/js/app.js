console.log('app.js was loaded.');

var CalcApp = angular.module('CalcApp', []);
CalcApp.controller('calc', ['$scope', function($scope) {
	$scope.display = 0;
	$scope.num1 = undefined;
	$scope.num2 = undefined;
	$scope.operator = undefined;
	$scope.equalClicked = false;

	$scope.numFunct = function(num) {
		if ($scope.equalClicked) {
			clearInputs();
			clearChecks();
			$scope.display = num;
		} 
		else if ($scope.operator && $scope.num1) {
			$scope.display += '' + num;
		} 
		else if ($scope.display == 0) {
			$scope.display = num;
		} 
		else if (!$scope.num1) {
			$scope.display += '' + num;
		}
	};

	$scope.opFunct = function(op) {
		if ($scope.num1 || $scope.operator) {
			return;
		} else {
			$scope.num1 = parseInt($scope.display);
			$scope.display += ' ' + op + ' ';
			$scope.operator = op;
		}

		// saves output after clicking '=' and builds on that
		if ($scope.equalClicked) {
			$scope.equalClicked = false;
		}
	};

	$scope.equalFunct = function() {
		if ($scope.num1 && $scope.operator && $scope.display) {
			$scope.equalClicked = true;
			$scope.display = parseInt($scope.display.split(' ')[2]);
			switch ($scope.operator) {
				case '+':
					$scope.display += $scope.num1;
					break;
				case '-':
					$scope.display -= $scope.num1;
					break;
				case '/':
					$scope.display /= $scope.num1;
					break;
				case '*':
					$scope.display *= $scope.num1;
			}
			clearInputs();	
		}
	};

	$scope.clearAll = function() {
		clearInputs();
		clearChecks();
	};

	function clearInputs() {
		$scope.num1 = undefined;
		$scope.num2 = undefined;
		$scope.operator = undefined;
	};

	function clearChecks() {
		$scope.equalClicked = false;
		$scope.display = 0;
	};

}])
		

// if first click, changes zero to clicked number
	// num click after that appends number to display
// if clicks operator
	//store in varOp
	//store num on screen into a variable
// num click now replaces num on display
	// clicks then append to number on display
// if = is pressed, num1 operator num2