'use strict';

angular.module('testGruntYoApp')
    .factory('Endpoints', function (configuration) {

        var urlFor = function (path) {
            return configuration.urlRoot + path;
        };
        var getNameUrl = urlFor('/name/:id/test');
        var saveNameUrl = urlFor('/name/saveName');

        return {
            getNameUrl: getNameUrl,
            saveNameUrl: saveNameUrl
        };
    });
