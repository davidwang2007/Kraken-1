/**
 * angular filters
 * @author David Wang
 */
define(['angular','services'],function(angular,services){
	'use strict';	
	/* Filters definition*/
	return angular.module('myApp.filters',['myApp.services'])
			.filter('interpolate',['version',function(version){
				return function(text){
					return String(text).replace(/\%VERSION\%/gm,version);
				};	
			}]);
});
