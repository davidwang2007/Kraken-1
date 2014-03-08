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
		.directive('myCurrentTime',['$interval','dateFilter','$log',function($interval,dateFilter,$log){
			function link(scope,element,attrs){
				//console.log('linking the my-current-time',attrs.myCurrentTime);
				//console.log($scope.cust,$scope.format);
				var format = attrs.myCurrentTime;
				scope.$watch(attrs.myCurrentTime,function(value){
					format = value;
					updateTime();
				});
				function updateTime(){
					//$log.log('now format = ', format);
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
		}]).
		directive('myDialog',function(){
			return {
				restrict: 'E',
				scope:{
					'close': '&onClose'
				},
				transclude: true,
				templateUrl: 'html/my-dialog.html'
			};	
		})
		.directive('myDialogClose',function(){
			return {
				restrict: 'E',
				scope:{
					'close': '&onClose'
				},
				transclude: true,
				templateUrl : 'html/my-dialog-close.html',
				link: function(scope,elements,attrs){
					console.log('link',arguments);	
				}
			};
		})
		.directive('mySmartFloat',function(){
			var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
			return {
				require: 'ngModel',
				link: function(scope,elements,attrs,ctrl){
					console.log('smart float link ',ctrl);
					ctrl.$parsers.unshift(function(viewValue){
						if(FLOAT_REGEXP.test(viewValue)){
							ctrl.$setValidity('float',true);	
							return parseFloat(viewValue.replace(',','.'));
						}else{
							ctrl.$setValidity('float',false);
							return undefined;
						}
					});			
				}
			}	
		})
		.directive('myInteger',function(){
			var INTEGER_REGEXP = /^\-?\d+$/;
			return {
				require: 'ngModel',
				link: function(scope,elements,attrs,ctrl){
					console.log('my integer link ',ctrl);
					ctrl.$parsers.unshift(function(viewValue){
						if(INTEGER_REGEXP.test(viewValue)){
							ctrl.$setValidity('integer',true);
							return parseInt(viewValue);
						}else{
							ctrl.$setValidity('integer',false);
							return undefined;
						}
					});
				
				}
			};
			
		});
});
