var router = require('express').Router();
module.exports = function(server){
  router
  .post('/login',
  server.middlewares.bodyparser,
  server.actions.auth.login)

  .get('/logout',
  server.middlewares.bodyparser,
  server.middlewares.ensureAuthenticated,
  server.actions.auth.logout);

  return router;
};
