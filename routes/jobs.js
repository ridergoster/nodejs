var router = require('express').Router();
module.exports = function(server){
  router
  .post('/',
  server.middlewares.bodyparser,
  server.actions.jobs.create)

  .get('/:id', server.actions.jobs.show)
  .get('/', server.actions.jobs.list)

  .put('/',
  server.middlewares.bodyparser,
  server.middlewares.ensureFields('_id'),
  server.actions.jobs.update)

  .delete('/',
  server.middlewares.bodyparser,
  server.middlewares.ensureFields('_id'),
  server.actions.jobs.remove);

  return router;
};
