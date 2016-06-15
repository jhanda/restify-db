// Dependencies
var request     = require ('request');  

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------

    app.get('/accounts', function(req, res) {

        //Getting all accounts
        res.send('Here\'s your accounts');

    });

    app.get('/accounts/:id', function(req, res) {

        //Getting all accounts
        res.send('Here\'s the ' + req.params.id + ' account');

    });

};  

