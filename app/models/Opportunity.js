var db   = require ('../lib/db.js')
var Account     = require ('./Account');

exports.getById = function(opportunityId, done) {
    var connection = db.get();

	connection.query('SELECT o.Name, o.description FROM Opportunity o WHERE o.Id_ = ?', opportunityId).then(function(rows){
		done(null, rows);
	});
};

exports.getOpportunities = function(accountId, done) {
    var connection = db.get();

	connection.query('SELECT o.Name, o.description FROM Opportunity o WHERE o.AccountId = ?', accountId).then(function(rows){
		done(null, rows);
	})
}