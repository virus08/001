'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8085;
// var app = express();
var app = require('./app');
var debug = require('debug')('Node01:server');


app.use(bodyParser.json());
app.use(express.static('./public'));

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)
    debug('Listening on ' + PORT);
});
