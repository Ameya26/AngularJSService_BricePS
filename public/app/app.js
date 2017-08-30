(function () {
  'use strict';

  // Define a module here
  var app = angular.module('app', ['ngRoute']);

  app.provider('books', ['constants', function (constants) {
    this.$get = function () {
            var appName = constants.APP_TITLE;
            var appDesc = constants.APP_DESCRIPTION;

            return{
              appName:appName,
              appDesc:appDesc
            };
    };

  }]);

  app.config(['booksProvider','$routeProvider', function (booksProvider, $routeProvider) {
    //console.log('title from the constants service : ' + constants.APP_TITLE);

    //console.log($routeProvider);


    $routeProvider
      .when('/', {
        templateUrl: 'app/templates/books.html',
        controller: 'BooksController',
        controllerAs: 'books'
      })
      .when('/AddBook', {
        templateUrl: 'app/templates/addBook.html',
        controller: 'AddBookController',
        controllerAs: 'addBook'
      })
      .when('/EditBook/:bookID', {
        templateUrl:'app/templates/editBook.html',
        controller:'EditBookController',
        controllerAs:'bookEditor'
      })
      .otherwise('/');


  }]);

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
