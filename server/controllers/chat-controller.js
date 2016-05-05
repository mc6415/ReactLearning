var msgs = [
];

module.exports.addMsg = function(req,res){
  console.log(req.body);

  msgs.push({
    id: req.body.id,
    message: req.body.message
  })

}

module.exports.getMsgs = function(req,res){
  res.json(msgs);
}
