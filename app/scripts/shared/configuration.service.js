'use strict';

angular.module('testGruntYoApp')
    .factory('configuration', function () {
        var urlRoot;
        if (window.location.port !== '') {
            urlRoot = 'http://localhost:9080/rest';
        }
        return {
            urlRoot: urlRoot
        };
    });
