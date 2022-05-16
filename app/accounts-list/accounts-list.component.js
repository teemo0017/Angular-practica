'use strict';

// Register `accountsList` component, along with its associated controller and template
angular.
module('accountsList').
component('accountsList', {
  templateUrl: 'accounts-list/accounts-list.template.html',
  controller: ['$http', function AccountsListController($http) {
    var self = this;
    self.client = {
      nombre : "Carlos Icaza",
      accounts : []
    }

    // $http.get('http://localhost:8080/usuario').then(function(response) {
    //   console.log(response);
    // })

    $http.get('accounts/accounts2.json').then(function(response) {
      self.cliente.accounts = response.data.cuentas

    });

   self.updateSelect = function() {
     this.selectedAccount = this.client.accounts[this.selectedItem];
     console.log ("la cuenta seleccionada es: " + this.selectedItem)
   };
 }]
});
