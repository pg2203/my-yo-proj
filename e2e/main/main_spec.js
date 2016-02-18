/* global require, browser, describe, beforeEach, it, fit, expect */
'use strict';

describe ('#Main', function () {

  var page = require('./main_page');

  beforeEach(function(){
    page.get('#/about');
    page.waitForAngular();
  });

  describe('#Main Page', function() {
    it('redirects to main welcome page', function() {
      expect(browser.getCurrentUrl()).toMatch('/about');
    });

    it('has a Sign In button page', function() {
      expect(page.btnSignIn.isElementPresent).toBeTruthy();
    });
  });

});
