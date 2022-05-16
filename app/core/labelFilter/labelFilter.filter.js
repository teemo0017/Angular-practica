'use strict';

angular.
  module('core').
  filter('labelFilter', function() {
    return function(input) {
      console.log(input);
      var map = {};
      //Valor de los labels
        map['id'] = 'Identificador';
        map['user_id'] = 'Descripción';
        map['title'] = 'Tipo';
        map['due_on'] = 'Número de cuenta';
        map['status'] = 'Saldo';
        map['juansito'] = 'Saldo'
      return map[input] ? map[input] : "NO FOUND";
    };
  });
