myApp.controller('expertController', function($scope,$http, dataService){
	$scope.appData = {};
		
	dataService.get('expert')
		.success(function(data){
			$scope.experts = data;
		})
		.error(function(data){
			console.log(data);
		});
		
	$scope.submitExpert = function(appData, model){
		dataService.store(appData, model)
			.success(function(data){
				dataService.get('expert')
					.success(function(Data){
						console.log(Data)
						$scope.experts = Data;
					});
			})
			.error(function(data){
				console.log(data);
			});
	};
	$scope.deleteExpert =  function(id){
		dataService.destroy(id, 'expert')
			.success(function(id){
				dataService.get('expert')
					.success(function(Data){
						$scope.experts = Data;
					});	
			});
	};
	
})