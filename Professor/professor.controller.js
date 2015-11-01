(function() {
    'use strict';

    angular
    .module("professor.ctrl", [])
    .controller("ProfessorCtrl", function($scope, LoginService, ProfessorService) {
        $scope.navCourses = false;
        $scope.showCourses = showCourses;
        
        getProfessor();
        
        function getProfessor() {
            ProfessorService.getProfessor(LoginService.getLoggedUser())
            .success(function(data) {
                $scope.professor = data;
            });
        }
        
        function showCourses() {
            $scope.navCourses = true;
        }
    });

})();