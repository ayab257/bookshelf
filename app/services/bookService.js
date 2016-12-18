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
		localStorage.setItem("currentBook",JSON.stringify(book));
	}

	function get() {
		if(selectedBook) return selectedBook
		
		 selectedBook= JSON.parse(localStorage.getItem("currentBook"));
		 return selectedBook;
	}

})();
