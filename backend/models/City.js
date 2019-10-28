var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new mongoose.Schema({
  name: String,
  country: String,
});

mongoose.model('City', CitySchema);