(function(angular) {
	'use strict';

	angular.module("Login", [])
	.controller("LoginController", ["$scope", "$http", function(vm, $http) {
		vm.cardNumber = "";
		vm.errorCardNumber = "";
		vm.password = "";
		vm.errorPassword = "";
		vm.errorLogin = false;

		vm.afterValidate = afterValidate;
		vm.validateCardNumber = validateCardNumber;
		vm.validatePassword = validatePassword;
		vm.login = login;
		vm.getUser = getUser;

		function getUser() {
		    $http.get("../Login/login.model.php?action=login&id="+vm.cardNumber+"&pass="+vm.password)
		        .success(function(response) {
		            vm.user = response;
		        });
		}

		function afterValidate() {
			vm.cardNumber = "";
			vm.password = "";
		}

		function validateCardNumber() {
			vm.errorCardNumber = "";

			if(vm.cardNumber === "") {
				vm.errorCardNumber = "The card number can't be empty.";
			}
		}
		
		function validatePassword() {
			vm.errorPassword = "";

			if(vm.password === "") {
				vm.errorPassword = "The password can't be empty.";
			}
		}
		
		function login() {
			vm.errorLogin = false;
			validateCardNumber();
			validatePassword();

			if(vm.errorCardNumber === "" && vm.errorPassword === "") {
				$http.get("../Login/login.model.php?action=login&id="+vm.cardNumber+"&pass="+vm.password)
		        .success(function(response) {
		        	console.log(response);
		            vm.user = response;
		        });

				/*if(vm.user != []) {
					vm.afterValidate();
					console.log(vm.user.id);
					console.log(vm.user.type);
				}
				else {
					vm.errorLogin = true;
				}*/
			}
		}
	}]);

})(window.angular);