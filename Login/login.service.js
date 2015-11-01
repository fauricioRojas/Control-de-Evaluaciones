var loggedUser;

(function() {
    'use strict';

    angular
    .module("login.service", [])
    .factory("LoginService", function($http, $q) {
        return {
            login: function(id, pass) {
                loggedUser = id;
                
                var deferred = $q.defer();
                var promise = deferred.promise;
                
                $http.get("./Login/login.model.php?action=login&id="+id+"&pass="+pass)
                .success(function(response) {
                    if(response.length === 0) {
                        deferred.reject(false);
                    }
                    else {
                        console.log("Response DB -> ",response);
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
                console.log("PROMISE ->" , promise);
                return promise;
            },
            getLoggedUser: function() {
                return loggedUser;
            }
        }
        
    });
   

})();