module.exports = function(server){
  return function(req, res, next){
    var Job = server.models.Job;
    console.log(req.params.id);

    Job.find({'_id': req.params.id },function(err, instance) {
      if (err) return res.send(err);
      res.json(instance);
    });
  };
};
