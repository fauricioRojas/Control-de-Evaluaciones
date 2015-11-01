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

        $scope.afterValidate = afterValidate;
        $scope.validateId = validateId;
        $scope.validatePassword = validatePassword;
        $scope.login = login;
        $scope.getUser = getUser;
        
        function getUser() { // 2-0562-0727
            LoginService.login($scope.id, $scope.pass)
            .success(function(data) {
                $scope.user = data;
            });
        }

        function afterValidate() {
            $scope.id = "";
            $scope.pass = "";
        }

        function validateId() {
            $scope.errorId = "";

            if(!$scope.id.length) {
                $scope.errorId = "The identification can't be empty.";
            }
        }

        function validatePassword() {
            $scope.errorPass = "";

            if(!$scope.pass.length) {
                $scope.errorPass = "The password can't be empty.";
            }
        }

        function login() {
            $scope.errorLogin = false;

            $scope.validateId();
            $scope.validatePassword();

            if(!$scope.errorId.length && !$scope.errorPass.length) {
                $scope.getUser();
                console.log("Validar $scope.user -> ", $scope.user);
                if(!$scope.user) {
                    $scope.errorLogin = true;
                }
                else {
                    //$scope.afterValidate();
                    
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