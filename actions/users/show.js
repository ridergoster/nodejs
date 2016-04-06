module.exports = function(server){
  return function(req, res, next){
    var User = server.models.User;
    var userToShow = req.params.id;

    User.findById(req.params.id, function(err, instance) {
      if (err) return res.send(err);
      res.json(instance);
    });
  };
};
