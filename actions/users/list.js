module.exports = function(server){
  return function(req, res, next){
    var User = server.models.User;
    User.find(function(err, users) {
      if (err) return res.send(err);
      res.send(users);
    });
  };
};
