module.exports = function(server){
  return function(req, res, next){
    var User = server.models.User;
    var userToDelete = req.params.id;

    User.findByIdAndRemove(userToDelete, function(err, instance) {
      if (err) return res.send(err);
      res.send(instance);
    });
  };
};
