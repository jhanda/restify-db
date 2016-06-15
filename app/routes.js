// Dependencies
var request     = require ('request');
var Account     = require ('./models/Account');

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------

    app.get('/accounts', function(req, res) {
        var offset = req.query.offset;
        var limit = req.query.limit;
        var keyword = req.query.keyword;  

        if(!offset || !limit){
            res.statusCode = 400
            res.send({error:'You must supply both offset and limit parameters'});
        }else{
            res.send('Here\'s your accounts');
        }

        
    });

    app.get('/accounts/:id', function(req, res) {

        var accountId = req.params.id;
        console.log('Getting account data for ' + accountId);
        //Getting all accounts
        Account.getById(accountId, function(error, results){
            if(error) {
                res.statusCode = error.httpErrorCode;
                res.send(error.httpErrorMessage);
            }else{
                res.send(results);    
            }
        });

    });

};  

