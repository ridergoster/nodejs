module.exports = function(server){
  return function(req, res, next){
    res.send(server.models.JOBS)
  }
}
