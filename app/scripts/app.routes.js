'use strict';

angular
    .module('testGruntYoApp')
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        // combine $http responses into one $digest
        $httpProvider.useApplyAsync(true);

        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common = {
            'content-type': 'application/json'
        };
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    'main': {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');

        //attach interceptors
       // $httpProvider.interceptors.push('myHttpInterceptor');
    });
