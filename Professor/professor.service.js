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
            }
        }
        
    });
   

})();