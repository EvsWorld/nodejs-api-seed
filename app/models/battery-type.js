var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var BatteryTypeSchema = new Schema({
  name: String,
  reference: String,
});

module.exports = mongoose.model('BatteryType', BatteryTypeSchema);
