'use strict';
/**
 * @ngdoc config
 * @name bmoApp.config
 * @description
 * # config
 *
 * application configurations
 */
angular
    .module('testGruntYoApp')
    .config(function ($compileProvider) {
        // disable debug info
        $compileProvider.debugInfoEnabled(false);
    })
    .config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });
