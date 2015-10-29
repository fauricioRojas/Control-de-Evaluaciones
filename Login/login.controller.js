(function(angular) {
    'use strict';

    angular.module("Login", [])
    .controller("LoginController", ["$scope", "$http", function(vm, $http) {
        vm.user = [];
        vm.id = "";
        vm.errorId = "";
        vm.password = "";
        vm.errorPassword = "";
        vm.errorLogin = false;

        vm.afterValidate = afterValidate;
        vm.validateId = validateId;
        vm.validatePassword = validatePassword;
        vm.login = login;
        vm.getUser = getUser;

        function getUser() { // 2-0562-0727
            $http.get("./Login/login.model.php?action=login&id="+vm.id+"&pass="+vm.password)
                .success(function(response) {
                    vm.user = response;
                });
        }

        function afterValidate() {
            vm.id = "";
            vm.password = "";
        }

        function validateId() {
            vm.errorId = "";

            if(!vm.id.length) {
                vm.errorId = "The identification can't be empty.";
            }
        }

        function validatePassword() {
            vm.errorPassword = "";

            if(!vm.password.length) {
                vm.errorPassword = "The password can't be empty.";
            }
        }

        function login() {
            vm.errorLogin = false;

            vm.validateId();
            vm.validatePassword();

            if(!vm.errorId.length && !vm.errorPassword.length) {
                vm.getUser();
                
                if(vm.user.length > 0) {
                    vm.afterValidate();
                    alert("Login correcto.");
                }
                else {
                    vm.errorLogin = true;
                }
            }
        }
    }]);

})(window.angular);