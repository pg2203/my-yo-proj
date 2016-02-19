'use strict';

angular.module('testGruntYoApp')
    .factory('myHttpInterceptor',
        function ($log, $rootScope, $q, $window, $injector) {

            var $modal, $state;

            function request(config) {
                config.timeout = 30000;
                return config;
            }

            function responseError(rejection) {
                $state = $state || $injector.get('$state');
                if (rejection.status === 401) {
                    $state.go('home');
                }
                return $q.reject(rejection);
            }

            function returnedResponse(response) {
                var errorsList = [];
                $state = $state || $injector.get('$state');

                if (response.config && response.config.url && response.config.url.indexOf('http') === 0) {
                    $state.go('error');
                    return $q.reject(response);
                }

                if (response) {
                    if (response.results) {
                        //DON'T DO ANYTHING ... SKIP error
                    }
                }

                return response;
            }

            return {
                responseError: responseError,
                response: returnedResponse,
                request: request
            };
        });
