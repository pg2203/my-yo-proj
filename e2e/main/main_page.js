/* global module, browser, element, by */

'use strict';

var MainPage = function() {

  this.get = function (url) {
    browser.get(url);
  };

  this.waitForAngular = function () {
    browser.waitForAngular();
  };

  this.btnSignIn = element(by.id('btnSignIn'));
  this.modalUserId = this.modalSignIn.element(by.id('email'));
  this.modalPassword = this.modalSignIn.element(by.id('password'));
  this.modalBtnSignIn = this.modalSignIn.element(by.id('loginBtn'));

};

module.exports = new MainPage();
