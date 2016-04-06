var router = require('express').Router();
module.exports = function(server){
  router
  .post('/',
  server.middlewares.bodyparser,
  server.middlewares.ensureAuthenticated,
  server.actions.jobs.create)

  .get('/:id', server.actions.jobs.show)
  .get('/', server.actions.jobs.list)

  .put('/:id',
  server.middlewares.bodyparser,
  server.actions.jobs.update)

  .delete('/:id',
  server.middlewares.bodyparser,
  server.actions.jobs.remove);

  return router;
};
