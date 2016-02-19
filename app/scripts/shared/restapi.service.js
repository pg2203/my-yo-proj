'use strict';

angular.module('testGruntYoApp')
    .service('RestAPI', function ($q, $resource, Endpoints) {

        function getName(name) {
            var url = Endpoints.getNameUrl;
            return $resource(url, {
                id: name
            }).get().$promise;
        }

        function saveName(request, name) {
            //return $resource(url).save({}, {
            //  'Content-Type': 'application/json'
            //}).$promise;
            var url = Endpoints.saveGoalsUrl;
            return $resource(url, {
                id: name
            }).save(request).$promise;
        }

        return {
            getName: getName,
            saveName: saveName
        };
    });
