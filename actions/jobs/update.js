module.exports = function(server){

  return function(req, res, next){
    var Job = server.models.Job;

    Job.update({'_id': req.body._id }, {$set: req.body}, function(err, instance) {
      if (err) return res.send(err);
      res.send(instance);
    });
  };
};
