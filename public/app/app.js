angular.module('MyApp', ['appRouter', 'mainCtrl', 'authService', 'userCtrl'])

.config(function($httpProvider){
	$httpProvider.interceptors.push("AuthInterceptor");
});