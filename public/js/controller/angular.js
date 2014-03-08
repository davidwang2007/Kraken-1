define(['angular','jquery'],function(angular,$){
	return angular.module('myApp.controller-angular',[])
		.controller('angularCtrl',['$scope','$timeout',function($scope,$timeout){
			$scope.cust= {name: 'D.W.', address:'U.S.A.'};	
			$scope.format = 'yyyy-MM-dd HH:mm:ss';
			$scope.name = 'D.W.';
			$scope.hideDialog = function(){
				$scope.dialogIsHidden = true;
				$timeout(function(){
					$scope.dialogIsHidden = false;	
				},2000);
			};

		}]);
});
