module.exports = function(server){

  return function(req, res, next){
    var User = server.models.User;
    var userToUpdate = req.params.id;
    var newUser = req.body;


    User.findByIdAndUpdate(userToUpdate, newUser, {$set: req.body}, function(err, instance) {
      if (err) return res.send(err);
      res.send(instance);
    });
  };
};
