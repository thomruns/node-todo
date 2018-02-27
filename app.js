var express = require('express');
var app = express(); // assign the express module to the app variable
var mongoose = require('mongoose');
var config = require('./config'); // get the user config credentials
var setupController = require('./controllers/setupcontroller'); // add sample seed data
var apiController = require('./controllers/apiController'); // api functionality

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public')); // path to static files

app.set('view engine', 'ejs'); // templating engine

mongoose.connect(config.getDbConnectionString()); // connect to the mongo db
setupController(app); // add sample seed data to the database for testing purposes only
apiController(app);  // call the apiController module

app.listen(port);