module.exports = function(server){
  return function(req, res, next){
    var Job = server.models.User;
    var jobToShow = req.params.id;

    Job.findById(jobToShow, function(err, instance) {
      if (err) return res.send(err);
      res.json(instance);
    });
  };
};
