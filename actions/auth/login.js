
var jwt = require('jsonwebtoken');
var JWT_SECRET = "JWT_SECRET";

module.exports = function(server) {
  return function(req, res, next) {
    var User = server.models.User;
    var AuthToken = server.models.AuthToken;

    User.findOne(req.body, function(err, user) {
      if(err) return res.status(500).send(err);
      if(!user) return res.status(404).send('invalid credentials');

      var authToken = new AuthToken({userId: user._id});

      authToken.save(function(err,token) {
        if(err) return res.status(500).send(err);
        var jwtToken = jwt.sign({auth: token._id}, JWT_SECRET);
        res.send(jwtToken);
      });
    });
  };
};
