var mongoose = require('mongoose');

var EnemySchema = new mongoose.Schema({
  origin: String,
  name: String,
  difficulty: {type: String, default: 'Adds'},
  guide: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Enemy', EnemySchema);
