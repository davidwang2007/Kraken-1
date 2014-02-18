/**
 * User model
 * @author David Wang
 * @email davidwang2006@outlook.com
 */
'use strict';
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	age: {type: Number, default:18},
	email: String,
	cellphone: String
});

userSchema.methods.whoAmI = function(){
	var greeting = 'Hello! My name is ' + this.username;
	console.log(greeting);
};

module.exports = mongoose.model('User',userSchema);
