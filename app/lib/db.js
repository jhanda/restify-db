var mysql = require('mysql');


var state = {
	pool: null
};

exports.connect = function(done) {
	state.pool = mysql.createPool({
		host: 'lrdcom-vm-150',
		user: 'liferay',
		password: '84v0s1qF5968Pnd',
		database: 'salesforce'
	});

	done();
}

exports.get = function() {
	return state.pool;
}