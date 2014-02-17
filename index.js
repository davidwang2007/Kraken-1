/*
 * kraken learning hello world project
 * using mongodb to persist the entities
 * author: David Wang
 * email: davidwang2006@outlook.com
 * date: 2014年 02月 17日 星期一 22:11:00 CST
 * kraken js structure: http://www.cnblogs.com/yupeng/p/3484189.html
 */
'use strict';


var kraken = require('kraken-js'),
	db = require('./lib/database'),
	express = require('express'),
    app = {};


app.configure = function configure(nconf, next) {
    // Async method run on startup.
	db.config(nconf.get('databaseConfig'));
    next(null);
};


app.requestStart = function requestStart(server) {
    // Run before most express middleware has been registered.
	server.use(function(req,res,next){
		console.log('------ request Start------');
		next();
	});
};


app.requestBeforeRoute = function requestBeforeRoute(server) {
    // Run before any routes have been added.
	// set locality to use the corrent properties file
	server.use(function(req,res,next){
		console.log('------ request before route');
		//console.log(req.headers['accept-language']);
		var language = req.headers['accept-language'];
		language = language.split(';')[0].split(',')[0];
		var part = language.split('-');
		res.locals.context = {
			locality : part[0] + '-' + part[1].toUpperCase()
		};

		next();
	});
	server.use(express.methodOverride());
};


app.requestAfterRoute = function requestAfterRoute(server) {
    // Run after all routes have been added.
	server.use(function(req,res,next){
		console.log('------ request after route');
		next();
	});
};


if (require.main === module) {
    kraken.create(app).listen(function (err) {
        if (err) {
            console.error(err.stack);
        }
    });
}


module.exports = app;
