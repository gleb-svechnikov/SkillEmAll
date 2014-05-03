myApp.controller('linksController', function($scope,$http, dataService){

	$scope.links = {};
	$scope.lessons = {};

	dataService.get('lesson')
		.success(function(data){
			console.log(data)
			$scope.lessons = data;
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

		
	
	$scope.submitLink = function(appData, model){
		dataService.store(appData, model)
			.success(function(data){
				dataService.get('link')
					.success(function(Data){
						console.log(Data)
						$scope.links = Data;
					});
			})
			.error(function(data){
				console.log(data);
			});
	};
	
	$scope.deleteLink =  function(id){
		dataService.destroy(id, 'link')
			.success(function(id){
				dataService.get('link')
					.success(function(Data){
						$scope.links = Data;
					});	
			})
			.error(function(data){
				console.log(data);
			});
	};
	

})