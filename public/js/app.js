/**
 * define angular module in this place
 * @author David Wang
 * @email davidwang2006@outlook.com
 */

define(['angular','angular-locale','config','filters','directives','services','controllers','ngRoute','ngResource'],function(angular){
	'use strict';
	//Declare app level module with depends on filters and service
	return angular.module('myApp',['ngRoute','myApp.config','myApp.controllers','myApp.filters','myApp.directives','myApp.services']);
});


