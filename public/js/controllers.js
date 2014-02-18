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
			.controller('user-add',['$scope',function($scope){
				console.debug('user-add controler initializing..');
				$scope.doSubmit = function(){
					console.log('Info');
				};		
			}])
			.controller('user-update',['$scope',function($scope){}]);
});
