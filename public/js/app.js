/**
 * define angular module in this place
 * @author David Wang
 * @email davidwang2006@outlook.com
 */

define(['angular','config','filters','services','controllers','ngRoute','ngResource'],function(angular,config,filters,services,controllers){
	'use strict';
	//Declare app level module with depends on filters and service
	return angular.module('myApp',['ngRoute','myApp.config','myApp.controllers','myApp.filters','myApp.services']);
});


