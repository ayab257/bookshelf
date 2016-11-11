(function() {
	var app = angular.module("app");
	app.factory("bookService", bookService)

	function bookService() {
		return {
			set : set,
			get : get,
		};
	}

	var selectedBook;
	
	
	function set(book) {
		console.log("book ", book)
		selectedBook = book;
	}

	function get() {
		return selectedBook;
	}

})();
