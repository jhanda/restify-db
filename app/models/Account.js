var db   = require ('../lib/db.js')


exports.getById = function(accountId, done) {
	var connection = db.get();

	connection.query('SELECT a.Name, \
							 a.Description, \
							 a.NumberOfEmployees, \
							 a.Website, \
							 CONCAT(u.FirstName, " ", u.LastName) as ownerfullName, \
							 u.email as ownerEmailAddress \
					 FROM Account_ a \
					 INNER JOIN User_ u on a.OwnerId = u.Id_ \
					 WHERE a.Id_ = ?', accountId, function (err, rows) {

		//If error, send it back
		if(err){
			err['httpErrorCode'] = "400";
			err['httpErrorMessage'] = "Error requesting data";
			console.log(err);
			done(err,null);
		}

		//No error, make sure at least 1 result found
		if(rows.length < 1){
			var err = {};
			err['httpErrorCode'] = "404";
			err['httpErrorMessage'] = "Resource not found";
			done(err,null);
		}

		//If no error, check for validity
		done(null, rows[0]);
	});
};