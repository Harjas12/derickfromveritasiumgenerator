var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var nameModel = require('../models/name.js');


router.get('/', function(req, res){
  nameModel.findOneRandom(function(err, name){
    if(err) throw err;
    res.render('index', {name: name});
  });
});

module.exports = router;
