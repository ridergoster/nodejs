module.exports = function(server){
  return function(req, res, next){
    server.models.JOBS.push(req.body.job);
    res.send(req.body.job);
  }
}
