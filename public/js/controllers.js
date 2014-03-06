/**
 * define angular controller
 * @author David Wang
 */

define(['angular','services','controller/angular'],function(angular,services){
	'use strict';
	/* Controllers */
	return angular.module('myApp.controllers',['myApp.services','myApp.controller-angular','ngResource'])
			.controller('user-list',['$scope','version','User',function($scope,version,User){
				$scope.users = User.query();
				$scope.deleteUser = function($index){
					$scope.users[$index].$remove(function(resp){
						console.log('user delete '+(resp.result == 0 ? 'success' : 'failed!'));
						$scope.users.splice($index,1);
					});
				};
			}])
			.controller('user-add',['$scope','$location','User',function($scope,$location,User){
				console.debug('user-add controler initializing..');
				$scope.doSave = function(){
					//console.log('doSubmit, user = ',$scope.user);
					new User($scope.user).$save();
					$location.path('user-list');
				};		
				$scope.doBack = function(){
					//console.log('$location.path = ',$location.path());
					$location.path('user-list');
				};
			}])
			.controller('user-update',['$scope','$location','$routeParams','User',function($scope,$location,$routeParams,User){
				$scope.user = User.get({id:$routeParams.id},function(user){
					$scope.master = angular.copy(user);
				});
				$scope.doUpdate = function(){
					$scope.user.$update({id:$routeParams.id},function(data){
						console.debug('update success,',data);	
						$location.path('user-list');
					},function(config,data){
						console.debug('update error',data);	
					});
					//$location.path('user-list');
				};
				$scope.isUnchanged = function(user){
					return angular.equals($scope.master,user);	
				};
				//Reset Pasword
				$scope.resetPassword = function(){
					//重置密码时 只需要将password属性添加进去即可
					$scope.user.password = '123456';
					$scope.user.$update({id:$routeParams.id});	
				};
				$scope.doBack = function(){
					//console.log('$location.path = ',$location.path());
					$location.path('user-list');
				};
				$scope.reset = function(){
					$scope.user = angular.copy($scope.master);	
				};
			}]);
});
