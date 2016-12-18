(function () {
	var app = angular.module("app");
	app.controller("searchBar",searchBar);
	
	function searchBar($scope, $http, bookService,$location) {
		
		$scope.goToBook= function(book){
			bookService.set(book);
			$location.path("/bookInfo");
		}
		$scope.sortBy="title";
	var key ="&key=AIzaSyBgzihkXKhmcw1jcbKGlOmDi3TpOak1Fm4";
	var url="https://www.googleapis.com/books/v1/volumes?q=";
	var QUERY_IN_TITLE= "+intitle:";
	var QUERY_IN_AUTHOR= "+inauthor:";
		$scope.getBooks = function() {

		var QUERY="";
			if($scope.filterType=="title")
			{
				QUERY= QUERY_IN_TITLE
			}
			else
			{
				QUERY= QUERY_IN_AUTHOR;
			}


			if ($scope.searchName != '') {
				var promise = $http.get(url + QUERY+$scope.search  + key);
					promise.then(successCallback, errorCallback);
			} else {

				$scope.results = [{
					name : "no results!"
				}];

			}
			function successCallback(response) {
				$scope.results = response.data.items;
				console.log("success", response.data.items);
			}

			function errorCallback(response) {
				console.log("error", response.data.items);
			}

		};
	
	}
})();
