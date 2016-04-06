module.exports = function(server){
  return function(req, res, next){
    var User = server.models.User;
    var user = req.params.id;

    User
    .findById(user)
    .populate('offers')
    .exec(function(err, instance) {
      if (err) return res.send(err);
      res.json(instance);
    });
  };
};
