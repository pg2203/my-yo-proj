'use strict';

describe('Service: TestService', function () {

    beforeEach(module('testGruntYoApp'));
    var TestService, endpoints, restAPI, rootScope, q, httpBackend;

    beforeEach(inject(function ($rootScope, $httpBackend, $q, _Endpoints_, _RestAPI_, _TestService_) {
        TestService = _TestService_;
        endpoints = _Endpoints_;
        restAPI = _RestAPI_;
        q = $q;
        rootScope = $rootScope;
        httpBackend = $httpBackend;

    }));

    describe('#getInformation', function () {
        it('checks if the rest API is called to submit the application', function () {
            httpBackend.whenGET(endpoints.getName).respond(200, {errors: []});
            var results = TestService.geInformation();
            httpBackend.flush();

            expect(results).toBeDefined();
        });

    });

    describe('#getInformation2', function () {
        it('checks if the rest API is called to get the getInformation2', function () {
            var results;
            TestService.getInformation2().then(function (response) {
                results = response;
            });
            httpBackend.flush();
            expect(results).toBeDefined();
        });
    });

    describe('#getInformation3', function () {
        it('checks if the channel API is called to get the user challenge questions', function () {
            spyOn(restAPI, 'getName').and.callThrough();
            var request = {
                userId: '123',
                email: 'abc'
            };

            TestService.getInformation3('123', 'abc', 'fr-CA');
            rootScope.$apply();
            expect(restAPI.getName).toHaveBeenCalledWith(request);

        });
    });

   it('#saveName should call saveName on restAPI', function () {
        spyOn(restAPI, 'saveName');

        TestService.saveName();
        rootScope.$apply();
        expect(restAPI.saveName).toHaveBeenCalled();
    });

});
