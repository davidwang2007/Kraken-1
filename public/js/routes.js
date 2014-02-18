/**
 * define angular route
 * @author David Wang
 */
define(['angular','app'],function(angular,app){
	'use strict';
	return app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$routeProvider.when('/users-list',{
			templateUrl: 'html/users-list.html',
			controller: 'users-list'
		}).when('/user-add',{
			templateUrl: 'html/user-add.html',
			controller: 'user-add'
		}).when('/user-update',{
			templateUrl: 'html/user-update.html',
			controller: 'user-update'
		}).otherwise({redirectTo:'/'});	
	}]);
});
