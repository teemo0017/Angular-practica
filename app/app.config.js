'use strict';

angular.
  module('AccountsApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/cuentas', {
          template:'<accounts-list></accounts-list>'
        }).
        otherwise('/cuentas');
    }
  ]);
