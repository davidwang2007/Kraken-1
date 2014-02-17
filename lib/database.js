/**
 * mongodb database connection
 * using the mongoose npm lib package
 * author: David Wang
 * email: davidwang2006@outlook.com
 * date: 2014年 02月 17日 星期一 22:04:01 CST
 */
'use strict';
var mongoose = require('mongoose');

var db = function(){
	return {
		config: function(conf){
			mongoose.connect('mongodb://' + conf.host + '/' + conf.database);	
			var db = mongoose.connection;
			db.on('error',console.error.bind(console,'connection error:'));
			db.once('open',function(){
				console.log('mongodb connection open SUCCESS : )');
			});
		}
	};
};
module.exports = db();
