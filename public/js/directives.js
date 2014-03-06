define(['angular'],function(angular){
	return angular.module('myApp.directives',[])
		.directive('myCustomer',function(){
			return {
				restrict: 'E',
				scope:{
					customerInfo: '=info'
				},
				templateUrl: 'html/my-customer.html'
			};
		})
		.directive('myCurrentTime',['$interval','dateFilter',function($interval,dateFilter){
			function link(scope,element,attrs){
				//console.log('linking the my-current-time',attrs.myCurrentTime);
				//console.log($scope.cust,$scope.format);
				var format = attrs.myCurrentTime;
				scope.$watch(attrs.myCurrentTime,function(value){
					format = value;
					updateTime();
				});
				function updateTime(){
					element.text(dateFilter(new Date(),format));
				}
				var intervalId = $interval(function(){
					updateTime();
				},1000);
				element.on('$destroy',function(){
					$interval.cancel(intervalId);
				});
			}	

			return {
				link : link	
			};
		}]);
});
