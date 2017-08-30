(function() {
  'use strict';

  angular.module('app')
  .service('logger', BookAppLogger)

  //service function as a construtor
  function LoggerBase() {
  }

  LoggerBase.prototype.output = function (message) {
    //console.log('LoggerBase : ' + message);
  };

  function BookAppLogger() {
    LoggerBase.call(this);

    this.logBook = function (book) {
      //console.log('Book : ' +book.title);
    };
  }
  BookAppLogger.prototype = Object.create(LoggerBase.prototype);

}());
