/**
 * Define angular services
 * @author David Wang
 * @email davidwang2006@outlook.com
 */
define(['angular'],function(angular){
	'use strict';	
	/* Services */
	//Demonstrate how to register services
	//In this case it is a simple value services.
	return angular.module('myApp.service',[])
			.value('version','0.1');
});
