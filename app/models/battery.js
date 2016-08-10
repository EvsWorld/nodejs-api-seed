var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var BatterySchema = new Schema({
  reference: String,
  status: String,
  sell_date: Date,
  user: {type: Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Battery', BatterySchema);
