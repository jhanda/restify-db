var mysql = require('mysql')

var salesforce = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : ''
});

var databases = new Object();

databases.salesforce = salesforce;

module.exports = databases;