var express = require('express');
var server = express();

var JOBS_DB = [];

server.get('/jobs', function(req, res, next){
  res.send(JOBS_DB);
});

server.post('/jobs/:title',
  ensureJobExists,
  function(req, res, next){
    JOBS_DB.push(req.params.title);
    res.send(JOBS_DB);
  });

server.put('/jobs/:old/:new',
  ensureJobExists,
  function(req, res, next){
    var oldIndex = JOBS_DB.indexOf(req.params.old);
    JOBS_DB.splice(oldIndex, 1);
    JOBS_DB.push(req.params.new);
    res.send(JOBS_DB);
  });

server.delete('/jobs/:job',
  ensureJobExists,
  function(req, res, next){
    var oldIndex = JOBS_DB.indexOf(req.params.job);
    JOBS_DB.splice(oldIndex, 1);
    res.send(JOBS_DB);
  });

function ensureJobExists(req, res, next){
  var job = req.params.job || req.params.old || req.params.title
  var exist = (JOBS_DB.indexOf(job) != -1)
  if (exist)
    console.log('job already exists');
  next();
}







console.log('Server listening on port 3000');
server.listen(3000);
