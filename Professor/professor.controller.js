(function(angular) {
    'use strict';

    angular.module("Professor", [])
    .controller("ProfessorController", ["$scope", "$http", function(vm, $http) {
        vm.professor = [];
        vm.getCourses = getCourses;

        function getCourses() {
            $http.get("./Professor/")
                .success(function(response) {
                    vm.courses = response;
                });
        }
    }]);

})(window.angular);