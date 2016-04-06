module.exports = function(server){
  server.middlewares = server.middlewares || {};
  server.middlewares.bodyparser = require('body-parser').json();
  server.middlewares.ensureFields = require('./ensureFields');
};
