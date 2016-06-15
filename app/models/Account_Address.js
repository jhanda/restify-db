var db   = require ('../lib/db.js');

var getAddress = function(addressId, done) {
	db.connect(function(){
		var connection = db.get();

		connection.query('select * from Account_Address__c where Id_ like \'' + addressId + '%\'', function (err, rows) {
			done(null, rows);
		});
	});
};

exports.getAddresses = function (accountId, offset, limit, done) {
	db.connect(function(){
		var values = [offset, limit];

		var connection = db.get();

		connection.query('select * from Account_Address__c where Account__c like \'' + accountId + '%\' LIMIT ' + offset + ', ' + limit, function (err, rows) {
			done(null, rows);
		});
	});
};