var router = require('express').Router();
var bodyparser = require('body-parser');

module.exports = function(server){
  router
  .post('/',
  bodyparser.json(),
  server.actions.jobs.create)

  .get('/', server.actions.jobs.list)

  .put('/',
  bodyparser.json(),
  server.actions.jobs.update)

  .delete('/:name', server.actions.jobs.remove)

  return router;
}
