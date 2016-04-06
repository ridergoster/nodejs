var jwt = require('jsonwebtoken');
var JWT_SECRET = "jwtSecret";

module.exports = function(server) {
  return function(req, res, next) {
    var User = server.models.User;
    var AuthToken = server.models.AuthToken;

    User.findOne(req.body, function(err, user) {
      if(err) return res.status(500).send(err);
      if(!user) return res.status(404).send('invalid credentials');

      var token = jwt.sign(user._id, JWT_SECRET);
      var authToken = new AuthToken({userId: token});

      authToken.save(function(err,save) {
        if(err) return res.status(500).send(err);

        res.send(save);
      });
    });
  };
};
