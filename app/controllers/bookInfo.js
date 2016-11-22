(function (){
	var app= angular.module("app");
	app.controller("bookInfo", bookInfo);
	
	function bookInfo($scope,$http, bookService){
		
		$scope.bookDetails= bookService.get()
		function sendBook(){
			var myData=localStorage.getItem("data");
		 	myData=JSON.parse(myData);
		 	if(!myData)myData=[];
			var data = {
			
				title : $scope.Title,
				author : $scope.Author,
			
			};
			myData.push(data);
			var JSONdata = JSON.stringify(myData);
			localStorage.setItem("data", JSONdata);
		}
	}
	
	
	
})();