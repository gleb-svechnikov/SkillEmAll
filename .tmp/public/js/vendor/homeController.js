myApp.controller('homeController', function($scope){
	$scope.addLesson = function(){
		document.location.href='/add-lesson/';
	}
})