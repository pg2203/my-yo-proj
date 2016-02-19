'use strict';

angular.module('testGruntYoApp')
    .factory('TestService', function (RestAPI) {

        function geInformation() {
            return RestAPI.getChallengeQuestions()
                .then(function (response) {
                    _emptyCheck(response);
                    return response;
                });
        }

        function getInformation3(userId, email, locale) {
            var params = {
                userId: userId,
                email: email
            };

            return RestAPI.getName(params).then(function (response) {
                _emptyCheck(response);
                return response;
            });
        }

        function saveName(params) {
            return RestAPI.saveName(params);
        }

        return {
          geInformation: geInformation,
          getInformation3: getInformation3,
          saveName: saveName
        };
    });
