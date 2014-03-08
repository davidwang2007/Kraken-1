/**
 * Created by david on 14-1-24.
 */

require.config({
    paths:{
        "jquery":"http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
        "angular": 'http://code.angularjs.org/1.2.14/angular.min',
		"angular-locale": 'http://code.angularjs.org/1.2.14/i18n/angular-locale_zh-cn',
        "ngRoute": 'http://code.angularjs.org/1.2.14/angular-route.min',
        "ngResource": 'http://code.angularjs.org/1.2.14/angular-resource.min',
        "bootstrap":"http://cdn.bootcss.com/twitter-bootstrap/3.0.3/js/bootstrap.min"
    },
	map:{
		"*" : {"jquery":"jquery-private"},
		"jquery-private": {"jquery":"jquery"}
	},
    shim:{
        'angular':{'exports':'angular'},
        'ngRoute':['angular'],
        'bootstrap':{
			deps:["jquery"]
		}
    },
    priority:["angular"]
});
//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

//define('core',['jquery','bootstrap'],function($){return $;});
require(['angular','app','routes','bootstrap','angular-locale'],function(angular,app,routes){
    'use strict';
    //var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        console.log('document ready',app['name']);
        angular.bootstrap(document,[app['name']]);
    });
});
require(['dom-ready']);
