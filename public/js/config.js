/**
 * config the global module properties
 * */
define(['angular'],function(angular){
	return angular.module('myApp.config',[]).run(['$http',function($http){
		$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';	
	}]);
});
