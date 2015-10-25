/*(function(){
	'use strict';

	angular
		.module('Login', [])
		.controller('LoginController', LoginController);

		function LoginController() {
			var vm = this;
			vm.carne = '2013235611';
			vm.password = '';
			vm.validateLogin = validateLogin;

			function validateLogin() {
				alert("VALIDAR");
			}
		}
});*/

angular.module("Login", [])
	.controller("LoginController", ["$scope", function(vm) {
		vm.cardNumber = "";
		vm.errorCardNumber = "";
		vm.password = "";
		vm.errorPassword = "";
		vm.validateCardNumber = validateCardNumber;
		vm.validatePassword = validatePassword;
		vm.validateLogin = validateLogin;

		function validateCardNumber() {
			vm.errorCardNumber = "";

			if(vm.cardNumber === "") {
				vm.errorCardNumber = "The card number can't be empty";
			}
		}
		
		function validatePassword() {
			vm.errorPassword = "";

			if(vm.password === "") {
				vm.errorPassword = "The password can't be empty";
			}
		}
		
		function validateLogin() {
			validateCardNumber();
			validatePassword();

			if(vm.errorCardNumber === "" && vm.errorPassword === "") {
				console.log("LOGIN OK");
				vm.cardNumber = "";
				vm.password = "";
			}
		}
	}]);