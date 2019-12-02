angular.module("myApp", ["ngRoute", "ngAnimate", "hl.sticky"])

	// configuration the route of application
	.config(function ($routeProvider) {
		$routeProvider
			.when("/books", {
				controller: "BookListCtrl",
				templateUrl: "partials/books.html"

			})
			.when("/kart", {
				controller: "KartListCtrl",
				templateUrl: "partials/kart.html"
			})
			.otherwise({
				redirectTo: "/books"
			});
	})

	.controller("HeaderCtrl", function ($scope, $location) {
		$scope.appDetails = {};
		$scope.appDetails.title = "BooKart";
		$scope.appDetails.tagline = "We have collection of 1 Million books";
		$scope.nav = {};
		$scope.nav.isActive = function (path) {
			if (path === $location.path()) {
				return true;
			}
		};
	})


