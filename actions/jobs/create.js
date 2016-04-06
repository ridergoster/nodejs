module.exports = function(server){
  return function(req, res, next){
    var Job = server.models.Job;
    var job = new Job(req.body);

    job.save(function(err, instance){
      if (err) return res.status(500).send(err);
      res.send(instance);
    });
  };
};
