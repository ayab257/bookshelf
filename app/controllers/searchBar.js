(function () {
	var app = angular.module("app");
	app.controller("searchBar",searchBar);
	
	function searchBar($scope, $http) {
	var key ="&key=AIzaSyBgzihkXKhmcw1jcbKGlOmDi3TpOak1Fm4";
	var url="https://www.googleapis.com/books/v1/volumes?q=";
	var QUERY = "+intitle:";
		$scope.getBooks = function() {

			if ($scope.searchName != '') {
				var promise = $http.get(url + $scope.search + QUERY+$scope.search  + key);
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
