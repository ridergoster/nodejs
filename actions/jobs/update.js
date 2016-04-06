module.exports = function(server){
  return function(req, res, next){
    var oldJob = req.body.old;
    var newJob = req.body.new;

    var jobs = [];
    server.models.JOBS.forEach(function(job){
      if (job == oldJob)
        jobs.push(newJob);
      else
        jobs.push(job);
    });

    server.models.JOBS = jobs;
    res.send(req.body.new);
  }
}
