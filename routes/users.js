var router = require('express').Router();
module.exports = function(server){
  router
  .post('/',
  server.middlewares.bodyparser,
  server.actions.users.create)

  .get('/:id', server.actions.users.show)
  .get('/', server.actions.users.list)

  .put('/:id',
  server.middlewares.bodyparser,
  server.actions.users.update)

  .delete('/:id',
  server.middlewares.bodyparser,
  server.actions.users.remove);

  return router;
};
