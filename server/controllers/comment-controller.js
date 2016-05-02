var Comment = require('../models/comment');

module.exports.create = function(req,res){
  var comment = new Comment();
  console.log(req.body);

  comment.author = req.body.author;
  comment.comment = req.body.comment;
  comment.createdDate = req.body.date;

  comment.save();

  res.json(comment);
};

module.exports.get = function(req,res){
  Comment.find(function(err,data){
    res.json(data);
  });
};
