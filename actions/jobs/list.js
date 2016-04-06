module.exports = function(server){
  return function(req, res, next){
    var Job = server.models.Job;

    Job.find(function(err, instances) {
      if (err) return res.send(err);
      res.send(instances);
    });
  };
};
