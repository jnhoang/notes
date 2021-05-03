angular
.module('TravelSensei')
.factory('AlertsFactory', [
  function() {
    var alerts = [];

    return {
      clear: clear,
      add: add,
      get: get,
      remove: remove
    }

    function clear() {
      alerts = [];
    }
    function add(type, message) {
      alerts.push({
        type: type, 
        message: message
      })
    }
    function get() {
      return alerts;
    }
    function remove(index) {
      alerts.splice(index, 1);
    }
  }])