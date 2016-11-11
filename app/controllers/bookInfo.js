(function (){
	var app= angular.module("app");
	app.controller("bookInfo", bookInfo);
	
	function bookInfo($scope,$http, bookService){
		
		$scope.bookDetails= bookService.get()
		
		
		
	}
	
	
	
})();