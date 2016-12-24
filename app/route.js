(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider.when('/search', {
			templateUrl : "app/views/search.html",
			controller : "searchBar"

		}).when('/about', {
			templateUrl : 'app/views/about.html'

		}).when('/bookInfo', {
			templateUrl : 'app/views/bookInfo.html',
			controller : "bookInfo",

		}).when('/home', {
			templateUrl : 'app/views/homePage.html',

		}).when('/profile', {
			templateUrl : 'app/views/profile.html',
			controller : "profile",
			
		}).when('/contactUs', {
			templateUrl : 'app/views/contact.html',
			
		}).otherwise({
			redirectTo : '/'
		});

	}

})();
