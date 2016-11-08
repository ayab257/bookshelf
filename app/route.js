(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider.when('/search', {
			templateUrl : "app/views/search.html",


		}).when('/about', {
			templateUrl : 'app/views/about.html',
			controller : "searchBar",
// 			
		// }).when('/home', {
			// templateUrl : 'app/views/home.html',
			// controller : "home"
		

		}).otherwise({
			redirectTo : '/'
		});

	}

})();