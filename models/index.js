var mongoose = require('mongoose');

module.exports = function(server){
  server.models = server.models || {};
  server.models.mongoose = mongoose.connect('mongodb://localhost:27017/jobs-db');
  server.models.Job = require('./Job')(server);
  server.models.User = require('./User')(server);
};
