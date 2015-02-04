var Parent = require("brisk").getClass("main"),
	cerberus = require('cerberus'),
	CORS = require('connect-cors'),
	//CORS = brisk.getLib("connect-xcors"),
	csrf = require('csurf');


var helper = Parent.extend({

	//CORS middleware
	cors : function(req, res, next) {
		// lookup registered apps...
		res.header('Access-Control-Allow-Origin', "*");
		//res.header('Access-Control-Allow-Origin', config.allowedDomains);
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		//res.header('Access-Control-Allow-Headers', 'X-Requested-With');
		next();
	},
/*
	//CORS middleware
	cors : function() {
		// load configuration
		return CORS( brisk.loadConfig('cors') );
	},
*/
	cerberus: cerberus,

	csrf: csrf

});


module.exports = helper;
