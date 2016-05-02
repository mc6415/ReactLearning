var mongoose = require('mongoose');

module.exports = mongoose.model('UserProfile', {
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});
