(function() {
    'use strict';

    angular
    .module("professor.service", [])
    .factory("ProfessorService", function($http, $q) {
        return {
            getProfessor: function(id) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                
                $http.get("./Professor/professor.model.php?action=getProfessor&id="+id)
                .success(function(response) {
                    if(response.length === 0) {
                        deferred.reject(false);
                    }
                    else {
                        deferred.resolve(response);
                    }
                })
                .error(function(err) {
                    console.log("ERROR conectando con el servidor");
                });
                
                promise.success = function(response) {
                    promise.then(response);
                },
                promise.error = function(err) {
                    promise.then(null, err);
                }
                
                return promise;
            },
            myCourses: function(id) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                
                $http.get("./Professor/professor.model.php?action=myCourses&id="+id)
                .success(function(response) {
                    if(response.length === 0) {
                        deferred.reject(false);
                    }
                    else {
                        deferred.resolve(response);
                    }
                })
                .error(function(err) {
                    console.log("ERROR conectando con el servidor");
                });
                
                promise.success = function(response) {
                    promise.then(response);
                },
                promise.error = function(err) {
                    promise.then(null, err);
                }
                
                return promise;
            },
            getEvaluations: function(idGroup) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                
                $http.get("./Professor/professor.model.php?action=getEvaluations&idGrupo="+idGroup)
                .success(function(response) {
                    if(response.length === 0) {
                        deferred.reject(false);
                    }
                    else {
                        deferred.resolve(response);
                    }
                })
                .error(function(err) {
                    console.log("ERROR conectando con el servidor");
                });
                
                promise.success = function(response) {
                    promise.then(response);
                },
                promise.error = function(err) {
                    promise.then(null, err);
                }
                
                return promise;
            },
            newEvaluation: function(idGrupo, nombre, porcentaje) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                
                $http.get("./Professor/professor.model.php?action=newEvaluation&idGrupo="+idGrupo+"&nombre="+nombre+"&porcentaje="+porcentaje)
                .success(function(response) {
                    if(!response) {
                        deferred.reject(false);
                    }
                    else {
                        deferred.resolve(response);
                    }
                })
                .error(function(err) {
                    console.log("ERROR conectando con el servidor");
                });
                
                promise.success = function(response) {
                    promise.then(response);
                },
                promise.error = function(err) {
                    promise.then(null, err);
                }
                
                return promise;
            },
            editEvaluation: function(idEval, nombre, porcentaje) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                
                $http.get("./Professor/professor.model.php?action=editEvaluation&idEval="+idEval+"&nombre="+nombre+"&porcentaje="+porcentaje)
                .success(function(response) {
                    if(!response) {
                        deferred.reject(false);
                    }
                    else {
                        deferred.resolve(response);
                    }
                })
                .error(function(err) {
                    console.log("ERROR conectando con el servidor");
                });
                
                promise.success = function(response) {
                    promise.then(response);
                },
                promise.error = function(err) {
                    promise.then(null, err);
                }
                
                return promise;
            },
            getStudentsFromGroup: function(idGrupo) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                
                $http.get("./Professor/professor.model.php?action=getStudentsFromGroup&idGrupo="+idGrupo)
                .success(function(response) {
                    if(response.length === 0) {
                        deferred.reject(false);
                    }
                    else {
                        deferred.resolve(response);
                    }
                })
                .error(function(err) {
                    console.log("ERROR conectando con el servidor");
                });
                
                promise.success = function(response) {
                    promise.then(response);
                },
                promise.error = function(err) {
                    promise.then(null, err);
                }
                
                return promise;
            }
        }
        
    });
   

})();