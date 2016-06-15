var mysql = require('promise-mysql');
var connection;

mysql.createConnection({
	host: 'localhost',
	user: '',
	password: '',
	database: ''
}).then(function(conn){
	connection = conn;
});

exports.get = function() {
	return connection;
}