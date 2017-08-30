(function () {
  'use strict';

  angular.module('app')
  .factory('dataService', ['$q', '$timeout', dataService]);

  function dataService($q, $timeout) {
    return {
      getAllBooks:getAllBooks,
      getAllReaders: getAllReaders
    };

    function getAllBooks() {
      var booksArray = [
        {
          book_id:1,
          title:'Harry potter and deathly hallows',
          author:'J. K Rowling',
          yearPublished: 2000
        },
        {
          book_id:2,
          title:'The Cat in the Hat',
          author:'Dr. Seuss',
          yearPublished: 1997
        },
        {
          book_id:3,
          title:'Encyclopedia Brown, Boy Detective',
          author:'Donal J Sobol',
          yearPublished: 1963
        }
      ];

      var deferred = $q.defer();

      $timeout(function () {

        var successful = true;
        if (successful) {

          deferred.notify('Gathering books.....');
          deferred.notify('Almost done......');

          deferred.resolve(booksArray);
        } else {

          deferred.reject('Error getting books..');

        }
      }, 1000);

      return deferred.promise;
    }

    function getAllReaders() {
      var readersArray = [
        {
          reader_id:1,
          name:'Marie',
          weeklyReadingGoal: 315,
          totalMinutesRead: 5600
        },
        {
          reader_id:2,
          name:'Daniel',
          weeklyReadingGoal: 210,
          totalMinutesRead: 3000
        },
        {
          reader_id:3,
          name:'Lanier',
          weeklyReadingGoal: 140,
          totalMinutesRead: 600
        }
      ];

      var deffered = $q.defer();

      $timeout(function () {
        var successful = true;

        if (successful) {
          deffered.resolve(readersArray);
        }else {
          deffered.reject('Error while fetching authors ....');
        }
      }, 1500);

      return deffered.promise;
    }
  }

})();
