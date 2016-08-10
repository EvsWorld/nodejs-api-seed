var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  username: String,
  token: String,
  last_seen: Date
});

module.exports = mongoose.model('User', UserSchema);
