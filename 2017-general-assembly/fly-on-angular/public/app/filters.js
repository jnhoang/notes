angular
.module('FlyApp')
.filter('fixgrammar', function() {
  return function(input) {
    return (input == 1) ? '1 engine' : input + ' engines';
  }
});