var db   = require ('../lib/db.js')
var Account_Address = require('./Account_Address');

exports.getById = function(accountId, expand, done) {
	var connection = db.get();

	var sqlQuery = 'SELECT a.Id_, \
						a.Name, \
						a.Description, \
						a.NumberOfEmployees, \
						a.Website, \
						CONCAT(u.FirstName, " ", u.LastName) as ownerfullName, \
						u.email as ownerEmailAddress \
					 FROM Account_ a \
					 INNER JOIN User_ u on a.OwnerId = u.Id_ \
					 WHERE a.Id_ = "' + accountId + '"';

	connection.query(sqlQuery).then(function(rows){

		//No error, make sure at least 1 result found
		if(rows.length < 1){
			var err = {};
			err['httpErrorCode'] = "404";
			err['httpErrorMessage'] = "Resource not found";
			done(err,null);
		}

		//Assume a valid account is returned, get addresses for that account
		var account = rows[0];
		Account_Address.getAddresses(account.Id_, 0, 100, function(err, data){
			if (expand && expand.includes('addresses')) {
				account["addresses"] = data;
			}

			done (null, account);
		});
	});
};

exports.getAll = function(offset, limit, keyword, done) {

	var connection = db.get();

	var sqlQuery = 'SELECT a.Id_, \
						a.Name, \
						a.Description, \
						a.NumberOfEmployees, \
						a.Website, \
						CONCAT(u.FirstName, " ", u.LastName) as ownerfullName, \
						u.email as ownerEmailAddress \
					 FROM Account_ a \
					 INNER JOIN User_ u on a.OwnerId = u.Id_ \
					 LIMIT ' + offset + ',' + limit;

	connection.query(sqlQuery).then(function(rows){
		
		for (var i = 0; i<rows.length; i++){		
			accountId = rows[i].Id_;
			console.log("Getting addresses for " + accountId);
			//Account_Address.getAddresses(accountId, 0, 100, function(err, data){
			//	rows[i].addresses = data;
			//	console.log(rows[i]);
			//});	
		}
		
		done (null, rows);
	});
};