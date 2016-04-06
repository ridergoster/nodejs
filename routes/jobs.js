var router = require('express').Router();
var bodyparser = require('body-parser');

module.exports = function(server){
  router.post('/',
  bodyparser.json(),
  server.actions.jobs.create);
  router.get('/:id', server.actions.jobs.show);
  router.get('/', server.actions.jobs.list);

  router.put('/:id',
  bodyparser.json(),
  server.actions.jobs.update);

  router.delete('/:id', server.actions.jobs.remove);

  return router;
};
