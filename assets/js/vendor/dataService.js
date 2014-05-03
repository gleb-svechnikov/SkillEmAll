myApp.factory('dataService', function($http){
	console.log(1)
	return {
		get: function(model){
			
			return $http.get('/' + model);
		},
		store: function(appData, model){
			console.log(appData)
			return $http({
				method: 'POST',
				url: '/' + model + '/create',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: $.param(appData)
			});
		},
		destroy: function(id, model){
			var path = '/' + model + '/destroy/?id=' + id;		
			return $http.delete(path);
		},
		getItem: function(id, model){
			return $http.get('/'+model+'?id='+id)
		}
	}
})