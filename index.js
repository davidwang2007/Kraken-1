'use strict';


var kraken = require('kraken-js'),
    app = {};


app.configure = function configure(nconf, next) {
    // Async method run on startup.
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
