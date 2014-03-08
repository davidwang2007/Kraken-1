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
					//console.log('link',arguments);	
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
			
		})
		.directive('myTabs',function(){
			return {
				restrict: 'E',
				transclude: true,
				scope: {},
				controller: function($scope){
					var panes = $scope.panes = [];
					$scope.select = function(pane){
						angular.forEach(panes,function(pane){
							pane.selected = false;
						});
						pane.selected = true;
					};
					this.addPane = function(pane){
						if(panes.length == 0){
							$scope.select(pane);
						}
						panes.push(pane);
					};
					//console.log('myTabs controller',this);
					//console.log('myTabs $scope',$scope);
				},
				templateUrl: 'html/directive/my-tabs.html'
			};
		})
		.directive('myPane',function(){
			return {
				restrict: 'E',
				require: '^myTabs',
				transclude: true,
				scope:{
					title: '@'
				},
				link : function($scope,$ele,$attrs,tabsCtrl){
					tabsCtrl.addPane($scope);
					//console.log('myPane link $scope = ',$scope);
					//console.log('myPane tabsCtrl = ',tabsCtrl);
				},
				templateUrl: 'html/directive/my-pane.html'
			};
		})
		.directive('myAlert',function(){
			return {
				restrict: 'E',
				transclude: true,
				scope: {
					kind: '@',
					closable: '='
				},
				templateUrl: 'html/directive/my-alert.html'
			};
		});
});
