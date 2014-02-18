'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    var model = new IndexModel();


    app.get('/test', function (req, res) {
		//res.locals.context = {
		//	locality: 'zh-CN'
		//};
		//console.log('res.locals = ',res.locals);
		console.log(res.locals);
        res.render('index', model);
        
    });

};
