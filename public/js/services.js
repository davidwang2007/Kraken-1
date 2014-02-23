/**
 * Define angular services
 * @author David Wang
 * @email davidwang2006@outlook.com
 */
define(['angular','ngResource'],function(angular){
	'use strict';	
	/* Services */
	//Demonstrate how to register services
	//In this case it is a simple value services.
	return angular.module('myApp.services',[])
			.value('version','0.1')
			.factory('User',['$resource',function($resource){
				return $resource('/user/:id',{id:'@_id'},{
					update: {method: 'PUT'}
				});	
			}]);
});
