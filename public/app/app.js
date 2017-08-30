(function () {
  'use strict';

  // Define a module here
  var app = angular.module('app', []);

  app.provider('books', function (constants) {
    this.$get = function () {
            var appName = constants.APP_TITLE;
            var appDesc = constants.APP_DESCRIPTION;

            return{
              appName:appName,
              appDesc:appDesc
            };
    };
    app.config(function ($provide, constants, dataServiceProvider) {
      console.log('title from the constants service : ' + constants.APP_TITLE);
    });
  });

  // This is the Option 1
  // Services syntax using $provide.provider function
  // $get has function
  // app.config(function ($provide) {
  //
  //   $provide.provider('books', function(){
  //     this.$get = function () {
  //
  //       var appName = 'Book logger';
  //       var appDesc = 'Track which books you read.';
  //
  //       return{
  //         appName:appName,
  //         appDesc:appDesc
  //       };
  //     };
  //   });
  // });

  //$provide.factory
  //$provider.service - if needed to create a constructor used in inheritence

})();
