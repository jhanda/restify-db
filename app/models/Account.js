var db   = require ('../lib/db.js')


exports.getById = function(accountId, done) {

	db.connect(function(){  
		var connection = db.get();

		connection.query('SELECT a.Name, a.description FROM Account_ a WHERE a.Id_ = ?', accountId, function (err, rows) {
			done(null, rows);
		});
	});
};