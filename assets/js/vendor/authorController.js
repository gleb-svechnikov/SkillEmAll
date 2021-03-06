myApp.controller('authorController', function($scope,$http, dataService){

	$scope.author = {};
	$scope.lessons = {};
	var id = window.location.search.substring(1).split("=")[1];
	 
	
	dataService.getItem(id, 'expert')
		.success(function(data){
			$scope.author = data;
		})
		.error(function(data){
			console.log(data);
		});	
		
	
	dataService.get('lesson')
		.success(function(data){
			$scope.lessons = data;
		})
		.error(function(data){
			console.log(data);
		});	
		
	$scope.loadLesson = function(id){
		console.log(id)
		document.location.href='/item?id='+id;

		
	}
	
	$scope.submitLesson = function(appData, model){
		dataService.store(appData, model)
			.success(function(data){
				dataService.get('lesson')
					.success(function(Data){
						console.log(Data)
						$scope.lessons = Data;
					});
			})
			.error(function(data){
				console.log(data);
			});
	};
	
	$scope.deleteLesson =  function(id){
		dataService.destroy(id, 'lesson')
			.success(function(id){
				dataService.get('lesson')
					.success(function(Data){
						$scope.lessons = Data;
					});	
			})
			.error(function(data){
				console.log(data);
			});
	};
	$scope.loadLesson = function(id){
		console.log(id)
		document.location.href='/item?id='+id;

		
	}

})