var router = require('express').Router();
module.exports = function(server){
  router
  .post('/login',
  server.middlewares.bodyparser,
  server.actions.auth.login);

  return router;
};
