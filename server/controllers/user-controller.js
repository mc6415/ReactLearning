var User = require('../models/user');
var sha1 = require('sha1');

module.exports.create = function(req,res){
  var user = new User({
    username: req.body.user.username,
    email: req.body.user.email,
    password: sha1(req.body.user.pass),
    firstName: req.body.user.firstname,
    lastName: req.body.user.lastname
  });

  user.save(function(err,data){
    if(err === null){
      res.json(data);
    } else {
      res.json(err);
    }
  });

};

module.exports.login = function(req,res){
  User.find({"username": req.body.state.username}, function(err,data){
    if(err === null){
      if(data[0].password === sha1(req.body.state.password)){
        console.log(data[0]._id);
        res.cookie('id', data[0]._id.toString()).send(data[0]);
      }
    } else {
      console.log(err);
    }
  });
};
