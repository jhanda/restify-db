// Dependencies
// -----------------------------------------------------
var bodyParser      = require('body-parser');
var express         = require('express');
var port            = process.env.PORT || 9100;
var app             = express();
var db				= require('./app/lib/db');

// Express Configuration
// -----------------------------------------------------


// Logging and Parsing
app.use(express.static(__dirname + '/public'));                 // sets the static files location to public
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json

// Routes
// ------------------------------------------------------
 require('./app/routes.js')(app);

// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);
