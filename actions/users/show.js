module.exports = function(server){
  return function(req, res, next){
    var User = server.models.User;
    var userToShow = req.params.id;

    User.findById(userToShow, function(err, instance) {
      if (err) return res.send(err);
      res.json(instance);
    });
  };
};
