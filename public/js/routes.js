/**
 * define angular route
 * @author David Wang
 */
define(['angular','app'],function(angular,app){
	'use strict';
	return app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$routeProvider.when('/user-list',{
			templateUrl: 'html/user-list.html',
			controller: 'user-list'
		}).when('/user-add',{
			templateUrl: 'html/user-add.html',
			controller: 'user-add'
		}).when('/user-update/:id',{
			templateUrl: 'html/user-update.html',
			controller: 'user-update'
		}).when('/',{templateUrl:'html/welcome.html'})
		.otherwise({redirectTo:'/'});	
	}]);

	//$locationProvider.html5Mode(true).hashPrefix('!');
});
