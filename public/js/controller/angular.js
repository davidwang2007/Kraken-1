define(['angular','jquery'],function(angular,$){
	console.log('jQuery = ',$);
	return angular.module('myApp.controller-angular',[])
		.controller('angularCtrl',['$scope',function($scope){
			$scope.cust= {name: 'D.W.', address:'U.S.A.'};	
			$scope.format = 'yyyy-MM-dd HH:mm:ss';
		}]);
});
