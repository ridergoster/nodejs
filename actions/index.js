module.exports = function(server){
  server.actions = server.actions || {};
  server.actions.jobs = require('./jobs')(server);
};
