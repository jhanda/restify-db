// Dependencies
var request     = require ('request');
var Account     = require ('./models/Account');
var Opportunity     = require ('./models/Opportunity');

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
            Account.getAll(offset, limit, keyword, function(error, results){
            if(error) {
                res.statusCode = error.httpErrorCode;
                res.send(error.httpErrorMessage);
            }else{
                res.send(results);    
            }
        });
        }

        
    });

    app.get('/accounts/:id', function(req, res) {
        var accountId = req.params.id;
        var expand = req.query.expand;

        console.log('Getting account data for ' + accountId);
        //Getting all accounts
        Account.getById(accountId, expand, function(error, results){
            if(error) {
                res.statusCode = error.httpErrorCode;
                res.send(error.httpErrorMessage);
            }else{
                res.send(results);    
            }
        });

    });

    app.get('/opportunities', function(req, res) {
        var offset = req.param('offset');
        var limit = req.param('limit');
        var keyword = req.param('keyword');

        if(!offset || !limit){
            res.status(400).send('You must supply both offset and limit parameters');
        }

        //Getting all opportunities
        res.send('Here\'s your opportunities');

    });

    app.get('/opportunities/:id', function(req, res) {

        var opportunityId = req.params.id;
        console.log('Getting opportunity data for ' + opportunityId);
        //Getting all opportunities
        Opportunity.getById(opportunityId, function(error, results){
            if(error)
                res.status(400).send('Something bad has happened');

            res.send(results);
        });

    });

};  

