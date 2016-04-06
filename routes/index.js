module.exports = function(server){
  server.use('/jobs', require('./jobs')(server));
};
