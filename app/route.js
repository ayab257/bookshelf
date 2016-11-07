(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider.when('/search', {
			templateUrl : 'app/views/search.html',
			controller : "searchBar",
			

		}).when('/contactus', {
			templateUrl : 'app/views/contactus.html',
			controller : "contactUs"
			

		}).when('/contactus/:name/:age', {
			templateUrl : 'app/views/contactus.html',
			

		}).when('/home', {
			templateUrl : 'app/views/home.html',
			controller : "home"
		

		}).otherwise({
			redirectTo : '/'
		});

	}

})();