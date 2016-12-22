(function (){
	var app= angular.module("app");
	app.controller("bookInfo", bookInfo);
	
	function bookInfo($scope,$http, bookService){
	
		$scope.bookDetails= bookService.get()
		$scope.sendBook=function(){
			var myData=localStorage.getItem("data");
		 	myData=JSON.parse(myData);
		 	if(!myData)myData=[];
			var data = {
				id: $scope.bookDetails.id,
				img: $scope.bookDetails.volumeInfo.imageLinks.smallThumbnail,
				title : $scope.bookDetails.volumeInfo.title,
				author : $scope.bookDetails.volumeInfo.authors[0],
			
			};
			
			myData.push(data);
			var JSONdata = JSON.stringify(myData);
			localStorage.setItem("data", JSONdata);
		}
			$scope.alert=function(){
			alert("added to profile")
		}
	}
	
	
	
})();