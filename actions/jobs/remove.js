module.exports = function(server){
  return function(req, res, next){
    var Job = server.models.Job;
    var jobToDelete = req.params.id;

    Job.findByIdAndRemove(jobToDelete, function(err, oldInstance) {
      if (err) return res.send(err);
      res.send(oldInstance);
    });
  };
};
