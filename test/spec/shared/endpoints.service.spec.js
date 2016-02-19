'use strict';

describe('Service: Endpoints', function () {

    beforeEach(module('testGruntYoApp'));

    var Endpoints;
    beforeEach(inject(function (_Endpoints_) {
        Endpoints = _Endpoints_;
    }));

    it('confirm getName url is not undefined', function() {
        //EXPECT
        expect(Endpoints.getNameUrl).not.toBeUndefined();
    });

    it('confirm saveName url is not undefined', function() {
        //EXPECT
        expect(Endpoints.saveNameUrl).not.toBeUndefined();
    });

});
