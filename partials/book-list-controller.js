angular.module("myApp")

    .controller("BookListCtrl", function ($scope, bookService, kartService) {

        $scope.books = bookService.getBooks();

        $scope.addToKart = function (book) {
            kartService.addToKart(book);
        }
        // setting the isVisible variable
        $scope.isVisible = false;
        // when the function is called the isVisible variable is set to true
        $scope.showHide = function () {
            $scope.isVisible = true;
        }
        $scope.show = function () {
            $scope.isVisible = false;
        }
    });