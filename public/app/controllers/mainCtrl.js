var main = angular.module('mainCtrl', []);


main.controller("MainController", function($rootScope, $location, Auth){
	var main = this;

	main.loggedIn = Auth.isLoggedIn();

	$rootScope.$on('$routeChangeStart', function(){
		main.loggedIn = Auth.isLoggedIn();


		Auth.getUser()
		.then(function(data){
			main.user = data.data;
			console.log(main.user);
		});
	});

	main.doLogin = function(){
		main.processing = true;

		main.error = "";
		console.log("login");

		Auth.login(main.loginData.email, main.loginData.password)
		.success(function(data){
			main.processing = false;
			Auth.getUser()
				.then(function(data){
					main.user = data.data;

				});
			if(data.success)
				$location.path('/');
			else
				main.error = data.message;
		});

	};

	main.doLogout = function(){
		Auth.logout();
		$location.path('/logout');
	};
});