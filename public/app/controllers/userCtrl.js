var user = angular.module('userCtrl', []);

user.controller("userController", function($scope, User){
	$scope.userData = {};

	$scope.signupUser = function(){
		User.create($scope.userData);
	};

});