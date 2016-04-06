module.exports = function(server){
  return function(req, res, next){
    var jobToDelete = req.params.name;

    var jobs = [];
    server.models.JOBS.forEach(function(job){
      if (job == jobToDelete)
        return;
        jobs.push(job);
    });

    server.models.JOBS = jobs;
    res.send(server.models.JOBS);
  };
};
