define('logger', function() {
	var React = require('react');

	var logger = (function() {

		var log = function() {
			console.log('loggeris');
		}

		return {
			log: log
		}
	})();

	return logger;
});
