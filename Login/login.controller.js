(function() {
    'use strict';

    angular
    .module("login.ctrl", [])
    .controller("LoginCtrl", function($scope, LoginService, $location) {
        $scope.id = "";
        $scope.errorId = "";
        $scope.pass = "";
        $scope.errorPass = "";
        $scope.errorLogin = false;

        $scope.validarId = validarId;
        $scope.validarPass = validarPass;
        $scope.login = login;
        $scope.getUser = getUser;
        
        function getUser() { // 2-0562-0727
            LoginService.login($scope.id, $scope.pass)
            .success(function(data) {
                $scope.user = data;
            });
        }

        function validarId() {
            $scope.errorId = "";

            if(!$scope.id.length) {
                $scope.errorId = "La cedula no puede ser vacia.";
            }
        }

        function validarPass() {
            $scope.errorPass = "";

            if(!$scope.pass.length) {
                $scope.errorPass = "La contraseña no puede ser vacia.";
            }
        }

        function login() {
            $scope.errorLogin = false;

            $scope.validarId();
            $scope.validarPass();

            if(!$scope.errorId.length && !$scope.errorPass.length) {
                $scope.getUser();
                console.log("Validar $scope.user -> ", $scope.user);
                if(!$scope.user) {
                    $scope.errorLogin = true;
                }
                else {
                    if($scope.user.type === 'P') {
                        $location.path('/professor');
                    }
                    else {
                        $location.path('/student');
                    }
                }
            }
        }
    });

})();