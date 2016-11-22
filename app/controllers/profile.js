(function (){
	var app= angular.module("app");
	app.controller("profile", profile);
	
	function profile($scope){
		
		$scope.dataList = JSON.parse(localStorage.getItem("data"));
	
	}
})();
