/**
 * define angular controller
 * @author David Wang
 */

define(['angular','services'],function(angular,services){
	'use strict';
	/* Controllers */
	return angular.module('myApp.controllers',['myApp.services','ngResource'])
			.controller('user-list',['$scope','version','User',function($scope,version,User){
				$scope.users = User.query();
			}])
			.controller('user-add',['$scope','$location','User',function($scope,$location,User){
				console.debug('user-add controler initializing..');
				$scope.doSave = function(){
					console.log('doSubmit, user = ',$scope.user);
					new User($scope.user).$save();
					$location.path('user-list');
				};		
				$scope.doBack = function(){
					console.log('$location.path = ',$location.path());
					$location.path('user-list');
				};
			}])
			.controller('user-update',['$scope','$routeParams','User',function($scope,$routeParams,User){
				$scope.user = User.get({id:$routeParams.id});
				$scope.doUpdate = function(){
					$scope.user.$update({id:$routeParams.id});
					$location.path('user-list');
				};
			}]);
});
