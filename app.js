var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config'); // get the user config credentials
var setupController = require('./controllers/setupcontroller'); // add sample seed data

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public')); // get static files

app.set('view engine', 'ejs'); // templating engine

mongoose.connect(config.getDbConnectionString()); // connect to the mongo db
setupController(app); // add sample seed data to the database for testing purposes

app.listen(port);