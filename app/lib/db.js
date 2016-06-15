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

exports.connection = connection;