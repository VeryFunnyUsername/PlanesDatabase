const mongoose = require('mongoose');

//model danych wpisu w MongoDB
const planeSchema = mongoose.Schema({
  producent: String,
  model: String,
  rok: Number,
});

module.exports = mongoose.model('Plane', planeSchema);
