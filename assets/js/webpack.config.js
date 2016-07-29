var path = require("path");

module.exports = {
	entry: './app.js',

	output: {
		path     : './',
		filename : 'app-bundle.js'
	},

	resolve: {
        alias: {
            react: __dirname + "/vendor/react.js"
        }
    },

    module: {
	    loaders: [{
	        test: /\.jsx?$/,
	        loader: 'babel',
	        query:
	        {
	            presets:['es2015', 'react']
	        }
	    }]
	}
};