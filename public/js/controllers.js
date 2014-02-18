/**
 * define angular controller
 * @author David Wang
 */

define(['angular','services'],function(angular,services){
	'use strict';
	/* Controllers */
	return angular.module('myApp.controllers',['myApp.services','ngResource'])
			.controller('users-list',['$scope','version','$http',function($scope,version,$http){
				$http.get('users').success(function(data){
					$scope.users = data;	
				});
			}])
			.controller('user-add',['$scope','$location','$http',function($scope,$location,$http){
				console.debug('user-add controler initializing..');
				$scope.doSubmit = function(){
					console.log('doSubmit, user = ',$scope.user);
					$http.post('/user',$scope.user,function(data){
						console.log('submit user, server response -> ',data);
						$location.path('users-list');
					});
				};		
				$scope.doBack = function(){
					console.log('$location.path = ',$location.path());
					$location.path('users-list');
				};
			}])
			.controller('user-update',['$scope',function($scope){}]);
});
