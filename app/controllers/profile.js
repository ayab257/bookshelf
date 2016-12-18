(function() {
	var app = angular.module("app");
	app.controller("profile", profile);

	function profile($scope) {

		$scope.books = JSON.parse(localStorage.getItem("data"));

		$scope.findBook = function(id) {
			function filter(book) {
				return book.id == id
			}


		var myBook=	$scope.books.find(filter)
		console.log('book' ,myBook)
		myBook.TBR=!!myBook.TBR;
		 for ( i=0 ; i< books.length; i++){
		 	if 
		 }
		 
		
		
		

})();
