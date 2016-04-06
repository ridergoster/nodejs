module.exports = function(server){
  server.actions = server.actions || {};
  server.actions.jobs = require('./jobs')(server);
  server.actions.auth = require('./auth')(server);
  server.actions.users = require('./users')(server);
};
