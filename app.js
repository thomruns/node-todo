var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config'); // get the user config credentials

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public')); // get static files

app.set('view engine', 'ejs'); // templating engine

mongoose.connect(config.getDbConnectionString()); // connect to the mongo db

app.listen(port);