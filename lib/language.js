/*
 * language settings using cookie
 * @author David Wang
 * @email davidwang2006@outlook.com
 * @date 2014年 02月 17日 星期一 22:28:11 CST
 */
'use strict';
module.exports = function(){
	return function(req,res,next){
		//pick up the language cookie
		var language = req.cookies.language || (function(){
			//If not set in cookies, pick it up from the request accept language
			var part = req.headers['accept-language'].split(';')[0].split(',')[0].split('-');
			return part[0] + '-' + part[1].toUpperCase();
		})();
		//Set the locality for this response.
		//The template will pick the appropritate bundle
		if(language){
			res.locals.context = res.locals.context || {};
			res.locals.context.locality = language;
		}

		next();
	};
};
