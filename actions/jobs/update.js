module.exports = function(server){

  return function(req, res, next){
    var Job = server.models.Job;
    var jobToUpdate = req.params.id;
    var newJob = req.body;


    Job.findByIdAndUpdate(jobToUpdate, newJob, {$set: req.body}, function(err, oldInstance) {
      if (err) return res.send(err);
      res.send(oldInstance);
    });
  };
};
