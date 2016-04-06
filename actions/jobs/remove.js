module.exports = function(server){
  return function(req, res, next){
    var Job = server.models.Job;
    var jobToDelete = req.body._id;

    Job.remove({'_id': jobToDelete },function(err, instance) {
      if (err) return res.send(err);
      res.send(instance);
    });
  };
};
