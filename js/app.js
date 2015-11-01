(function() {
    'use strict';
    
    angular.module("myApp", ["ngRoute", "login.ctrl", "professor.ctrl", "student.ctrl", 
        "login.service", "professor.service"])
    .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./Login/login.html",
                controller: "LoginCtrl"
            })
            .when("/professor", {
                templateUrl: "./Professor/professor.html",
                controller: "ProfessorCtrl"
            })
            .when("/student", {
                templateUrl: "./Student/student.html",
                controller: "StudentCtrl"
            })
        .otherwise({
            redirectTo: "/"
        });
    }

})();