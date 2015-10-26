(function(angular) {
	'use strict';

	angular.module("Login", [])
	.controller("LoginController", ["$scope", function(vm) {
		vm.cardNumber = "";
		vm.errorCardNumber = "";
		vm.password = "";
		vm.errorPassword = "";
		vm.afterValidate = afterValidate;
		vm.validateCardNumber = validateCardNumber;
		vm.validatePassword = validatePassword;
		vm.login = login;

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
			validateCardNumber();
			validatePassword();

			if(vm.errorCardNumber === "" && vm.errorPassword === "") {
				console.log("LOGIN OK");
				vm.afterValidate();
			}
		}
	}]);

})(window.angular);