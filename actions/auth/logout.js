var jwt = require('jsonwebtoken');

module.exports = function(server) {

  var JWT_SECRET = server.settings.JWT_SECRET;

  return function(req, res, next) {
    var User = server.models.User;
    var AuthToken = server.models.AuthToken;

    AuthToken.findByIdAndRemove(req.auth.token, function(err, removedToken) {
      if(err) return res.status(500).send(err);
      res.send('logout succeeded');
    });
  };
};
