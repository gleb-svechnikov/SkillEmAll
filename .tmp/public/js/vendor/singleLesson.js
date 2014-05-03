myApp.controller('singleLesson', function($scope,$http, dataService){

	$scope.lesson = {};
	$scope.links = {};
	var id = window.location.search.substring(1).split("=")[1];
	
	dataService.get('link')
		.success(function(data){
			console.log(data)
			$scope.links = data;
		})
		.error(function(data){
			console.log(data);
		});	
	
	dataService.getItem(id, 'lesson')
		.success(function(data){
			$scope.lesson = data;
		})
		.error(function(data){
			console.log(data);
		});	
	
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

})