(function () {

  //Inline array annotations
  angular.module('app')
  .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', '$q', BooksController]);


  function BooksController(books, dataService, logger, badgeService, $q) {
    var vm = this;

    vm.appName = books.appName;

    var booksPromise = dataService.getAllBooks();
    var readersPromise = dataService.getAllReaders();

    $q.all([booksPromise, readersPromise])
      .then(getAllDataSuccess)
      .catch(getAllDataError);

    function getAllDataSuccess(dataArray) {
      // console.log(dataArray);
      vm.allBooks = dataArray[0];
      vm.allReaders = dataArray[1];
    }

    function getAllDataError(reason) {
      //console.log(reason);
    }

    // dataService.getAllBooks()
    // .then(getBooksSuccess, null, getBooksNotification)
    // .catch(errorCallback)
    // .finally(getAllBooksComplete);
    //
    // function getBooksSuccess(books) {
    //   vm.allBooks = books;
    // }
    //
    // // function getBooksError(reason) {
    // //   console.log(reason);
    // // }
    //
    // function getAllBooksComplete() {
    //   console.log('getllBooks is complete');
    // }
    //
    // function errorCallback(errorMsg) {
    //   console.log(errorMsg);
    // }
    //
    // function getBooksNotification(notification) {
    //   console.log('Promise notification ' +notification);
    // }
    //
    // // vm.allReaders = dataService.getAllReaders();
    // dataService.getAllReaders()
    // .then(getReadersSuccess)
    // .catch(errorCallback)
    // .finally(getAllReadersComplete);
    //
    // function getReadersSuccess(readers) {
    //   vm.allReaders = readers;
    // }
    // function getAllReadersComplete() {
    //   console.log('getAllReaders is complete ');
    // }

    vm.getBadge = badgeService.retrieveBadge;

    logger.output('BooksController has been created. ');
  }
})();
