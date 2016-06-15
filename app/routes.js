// Dependencies
var request     = require ('request');
var Account     = require ('./models/Account');

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------

    app.get('/accounts', function(req, res) {
        var offset = req.param('offset');
        var limit = req.param('limit');
        var keyword = req.param('keyword');  

        if(!offset || !limit){
            res.status(400).send('You must supply both offset and limit parameters');
        }
        
        //Getting all accounts
        res.send('Here\'s your accounts');

    });

    app.get('/accounts/:id', function(req, res) {

        var accountId = req.params.id;
        console.log('Getting account data for ' + accountId);
        //Getting all accounts
        Account.getById(accountId, function(error, results){
            if(error) 
                res.status(400).send('Something bad has happened');
            
            res.send(results);
        });

    });

};  

