module.exports = function(server){
  return function(req, res, next){
    var User = server.models.User;
    var body = req.body;
    body.owner = req.auth.user._id;
    User.findById(body.owner, function(err,user) {
      if(err) return res.status(500).send(err);
      var Job = server.models.Job;
      var job = new Job(body);
      job.save(function(err, job){
        if (err) return res.status(500).send(err);
        user.offers.push(job._id);
        user.save(function(err, instance) {
          if(err) return res.status(500).send(err);
          res.send(job);
        });
      });
    });
  };
};
