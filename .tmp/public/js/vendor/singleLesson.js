myApp.controller('singleLesson', function($scope,$http, dataService){

	$scope.lesson = {};
	$scope.links = {};
	var authorID = null;
	$scope.author = {};
	var id = window.location.search.substring(1).split("=")[1];
	
		
	
	dataService.getItem(id, 'lesson')
		.success(function(data){
			$scope.lesson = data;
			authorID = data.ownerID;
			console.warn(authorID)
			dataService.findByID(authorID, 'expert')
				.success(function(data){
					$scope.author = data;
					
				})
				.error(function(data){
					console.log(data);
			});	
			
		})
		.error(function(data){
			console.log(data);
		});
	
	dataService.get('link')
		.success(function(data){
			$scope.links = data;
		})
		.error(function(data){
			console.log(data);
		});
	
	$scope.authorID = $scope.lesson.ownerID;
	
	
	
	
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