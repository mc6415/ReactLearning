var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', {
  author: {type: String, required: true},
  comment: {type: String, required: true},
  createdDate: {type: String}
});
