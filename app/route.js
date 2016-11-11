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

		}).when('/', {
			template : '<h1>HELLO BOOK LOVERS</h1>',

		}).otherwise({
			redirectTo : '/'
		});

	}

})(); 