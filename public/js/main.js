/**
 * Created by david on 14-1-24.
 */

require.config({
    paths:{
        "jQuery":"http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
        "angular": 'http://code.angularjs.org/1.2.9/angular.min',
        "ngRoute": 'http://code.angularjs.org/1.2.9/angular-route.min',
        "ngResource": 'http://code.angularjs.org/1.2.9/angular-resource.min',
        "bootstrap":"http://cdn.bootcss.com/twitter-bootstrap/3.0.3/js/bootstrap.min"
    },
    shim:{
        'angular':{'exports':'angular'},
        'ngRoute':['angular'],
        'bootstrap':['jQuery']
    },
    priority:["angular"]
});
//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require(['angular','app','routes','bootstrap'],function(angular,app,routes){
    'use strict';
    //var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        console.log('document ready',app['name']);
        angular.bootstrap(document,[app['name']]);
    });
});

console.log('main.js loaded....');
