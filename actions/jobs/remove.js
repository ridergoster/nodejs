module.exports = function(server){
  return function(req, res, next){
    var Job = server.models.Job;
    var jobToDelete = req.params.id;

    Job.remove({'_id': req.params.id },function(err, instance) {
      if (err) return res.send(err);
      res.send(instance);
    });
  };
};
