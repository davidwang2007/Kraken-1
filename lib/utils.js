/**
 * utils library
 * @author David Wang
 * @email davidwang2006@outlook.com
 */
'use strict';

/**
 * copy b's properties to a
 */
function merge(a,b){
	Object.keys(b).forEach(function(key){
		a[key] = b[key];		
	});	
	return a;
}

module.exports = {
	merge: merge
};
