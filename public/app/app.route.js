var route = angular.module('appRouter', ['ngRoute']);


route.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: "app/view/pages/home.html",
			Controller: "MainController",
			controllerAs: "main"
		})
		.when('/login', {
			templateUrl: "app/view/pages/login.html"
		})
		.when('/signup', {
			templateUrl: "app/view/pages/signup.html"
		});

		$locationProvider.html5Mode(true);
});