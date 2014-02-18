/**
 * controller user
 * @author David Wang
 * @email davidwang2006@outlook.com
 */
'use strict';
var utils = require('../lib/utils');
var User= require('../models/user');

module.exports = function(app){
	app.get('/user/:id',function(req,res,next){
		User.findById(req.param('id'),function(err,user){
			if(err) {return next(err);}
			res.send(user);
		});			
	});
	app.get('/users',function(req,res,next){
		User.find(function(err,users){
			if(err) {return next(err);}
			res.send(users);
		});			
	});
	app.post('/user',function(req,res,next){
		new User(utils.merge({},req.body)).save(function(err,user){
			console.log('Add new user success! ', user);		
			if(err){
				return next(err);	
			}
			res.send(user);
		});
	});
	app.delete('/user/:id',function(res,req,next){
		User.findByIdAndRemove(res.param('id'),function(err){
			if(err){
				return next(err);
			}	
			req.send({result:0,msg:'OK'});
		});			
	});
};