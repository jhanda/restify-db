// Dependencies
var request     = require ('request');  
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : ''
});

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------

    app.get('/account', function(req, res) {

        var accountName = req.query.name;
        var query = 'SELECT ae.name, ae.code_, ae.notes, ae.instructions FROM OSB_AccountEntry ae WHERE ae.name = "' + accountName + '";'
        connection.query(query, function(err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', rows[0].code_);
            res.json(rows[0].code_);
        });

    });
};  