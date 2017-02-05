var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index.js');

var app = express();
mongoose.connect(/*I have removed the url so as to protect the datbaserver*/);

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', index);

app.listen(process.env.PORT || 5000);
