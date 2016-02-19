'use strict';

describe('Service: RestAPI', function () {
    var RestAPI, httpBackend, id, url;
    id = '123456';

    var getNameResponse = {};
    var saveNameResponse = {};
    beforeEach(module('testGruntYoApp'));

    beforeEach(inject(function (_$httpBackend_, _RestAPI_, configuration) {
        url = configuration.urlRoot + '/';
        httpBackend = _$httpBackend_;
        RestAPI = _RestAPI_;
        httpBackend.expectGET('lang/locale-en-CA.json').respond(200);
        httpBackend.whenGET('views/404.html').respond(200);

        httpBackend.when('GET', url + 'name/' + id + '/test').respond(getNameResponse);
        httpBackend.when('GET', url + 'name/saveName').respond(saveNameResponse);

    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should return $promise object when invoked getName', function () {

        var promise = RestAPI.getName(id);
        httpBackend.flush();

        expect(promise).not.toBeNull();
        promise.then(function (data) {
            expect(data.id).toEqual('aaabbbcc');
        });

    });

    it('should return $promise object when invoked saveName', function () {

        var promise = RestAPI.saveName();
        httpBackend.flush();
        expect(promise).not.toBeNull();
        promise.then(function (data) {
            expect(data).not.toBeNull();
        });

    });
});
