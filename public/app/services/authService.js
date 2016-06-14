var auth = angular.module('authService', []);

auth.factory("Auth", function($http, $q, AuthToken){
	var authFactory = {};

	authFactory.login = function(email, password){
		return $http.post('/api/login', {
			email: email,
			password: password
		})
		.success(function(data){
			AuthToken.setToken(data.token);
			return data;
		});
	};

	authFactory.logout = function(){
		AuthToken.setToken();
	};

	authFactory.isLoggedIn = function(){
		if(AuthToken.getToken())
			return true;
		else
			return false;
	};

	authFactory.getUser = function(){
		if(AuthToken.getToken())
			return $http.get('/api/me');
		else
			return $q.reject({message: "User has invalid token."});

		console.log(AuthToken.getToken());
	}
	return authFactory;

});

auth.factory('AuthToken', function($window){
	var authToken = {};

	authToken.getToken = function(){
		return $window.localStorage.getItem('token');
	};

	authToken.setToken = function(token){
		if(token){
			$window.localStorage.setItem("token", token);
		} else {
			$window.localStorage.removeItem('token');
		}
	};
	return authToken;
});


auth.factory('AuthInterceptor', function($q, $location, AuthToken){
	var interceptorFactory = {};
	interceptorFactory.request = function(config){
		var token = AuthToken.getToken();
		if(token){
			config.headers['x-access-token'] = token;
		}
		return config;
	};

	interceptorFactory.responseError = function(response){
		if(response.status == 403){
			$location.path('/login');
		}
		return $q.reject(response);
	}
	return interceptorFactory;
});