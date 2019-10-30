var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  name: String,
  country: String,
}, { collection: 'cities' });

var City = mongoose.model('City', citySchema);
module.exports = City;