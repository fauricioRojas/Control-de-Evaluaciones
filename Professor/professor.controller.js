(function() {
    'use strict';

    angular
    .module("professor.ctrl", [])
    .controller("ProfessorCtrl", function($scope, LoginService, ProfessorService, $location) {
        $scope.cursoActual = {};
        $scope.evalActual = {};
        $scope.showEvaluaciones = false;
        $scope.studentsVisible = false;
        $scope.evaluaciones = [];
        $scope.profesor = {};
        $scope.nuevaEval = false;
        $scope.editarEval = false;
        $scope.nombreEval = "";
        $scope.porcentajeEval = "";
        $scope.exitoAlGuardarEval = false;
        $scope.exitoAlEditarEval = false;
        
        $scope.logout = logout;
        $scope.showEvaluations = showEvaluations;
        $scope.gestionEvaluacion = gestionEvaluacion;
        $scope.editarEvaluacion = editarEvaluacion;
        $scope.showStudents = showStudents;

        getProfessor();
        myCourses();
        
        $scope.$watch('nombreEval',function() {$scope.validar();});
        $scope.$watch('porcentajeEval',function() {$scope.validar();});

        $scope.validar = function() 
        {
            if(!$scope.nombreEval.length || !$scope.porcentajeEval.length || isNaN($scope.porcentajeEval)) 
            {
               $scope.error = true;
            }
            else
            {
               $scope.error = false;
            }
        };
        
        function getProfessor() {
            ProfessorService.getProfessor(LoginService.getLoggedUser())
            .success(function(data) {
                $scope.profesor = data;
            });
        }
        
        function myCourses() {
            ProfessorService.myCourses(LoginService.getLoggedUser())
            .success(function(data) {
                $scope.cursos = data;
            });
        }
        function logout() {
            $location.path('/');
        }
        
        function showEvaluations(curso) {
            $scope.nuevaEval = false;
            $scope.editarEval = false;
            $scope.evaluaciones = [];
            $scope.showEvaluaciones = true;
            $scope.cursoActual = curso;
            
            ProfessorService.getEvaluations(curso.idGrupo)
            .success(function(data) {
                $scope.evaluaciones = data;
            });
        }
        
        function gestionEvaluacion() {
            $scope.exitoAlEditarEval = false;
            $scope.exitoAlGuardarEval = false;
            
            if($scope.nuevaEval) {
                ProfessorService.newEvaluation($scope.cursoActual.idGrupo, $scope.nombreEval, $scope.porcentajeEval) //idGrupo, nombre, porcentaje
                .success(function(data) {
                    if(data) {
                        $scope.exitoAlGuardarEval = true;
                        $scope.nombreEval = "";
                        $scope.porcentajeEval = "";
                    }
                });
            }
            else {
                ProfessorService.editEvaluation($scope.evalActual.id, $scope.nombreEval, $scope.porcentajeEval)
                .success(function(data) {
                    if(data) {
                        $scope.exitoAlEditarEval = true;
                        $scope.nombreEval = "";
                        $scope.porcentajeEval = "";
                    }
                });
            }
        }
        
        function editarEvaluacion(evaluacion) {
            $scope.evalActual = evaluacion;
            $scope.editarEval = true;
            $scope.nombreEval = evaluacion.nombre;
            $scope.porcentajeEval = evaluacion.porcentaje;
        }
        
        function showStudents(curso) {
            $scope.nuevaEval = false;
            $scope.editarEval = false;
            $scope.showEvaluaciones = false;
            $scope.studentsVisible = true;
            $scope.cursoActual = curso;
            
            ProfessorService.getStudentsFromGroup($scope.cursoActual.idGrupo)
                .success(function(data) {
                    if(data) {
                        console.log(data);
                    }
                });
        }
    });

})();