var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var controllers = require('./server/controllers/namespace.js');

mongoose.connect('mongodb://localhost:27017/ReactTest');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req,res){
  res.sendFile('index.html');
});

// Comment API
app.post('/api/createComment', controllers.comment.create);
app.get('/api/getComments', controllers.comment.get);

// Users API
app.post('/api/users/create', controllers.users.create);

app.get('/api/chat/get', controllers.chat.getMsgs);
app.post('/api/chat/post', controllers.chat.addMsg);

app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
