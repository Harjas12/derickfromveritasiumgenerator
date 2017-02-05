var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var Schema = mongoose.Schema;

var nameSchema = new Schema({
  derick: String,
  veritasium: String
});

nameSchema.set('collection', 'nameIdeas');
nameSchema.plugin(random);

var model = mongoose.model('nameIdeas', nameSchema);

module.exports = model;
