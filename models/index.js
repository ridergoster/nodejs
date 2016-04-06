module.exports = function(server){
  server.models = server.models || {};
  server.models.JOBS = [
    'developer',
    'pompier',
    'architect',
    'designer'];
}
