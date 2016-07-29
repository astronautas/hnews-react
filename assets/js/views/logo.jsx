'use strict';

define('logo', function() {
	var React = require('react');

	var Logo = React.createClass({
		render: function() {
			return (
				<div className="site-logo">
					HNews
				</div>
			);
		}
	});

	return Logo;

});