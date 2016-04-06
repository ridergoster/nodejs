module.exports = function(fields){

  return function(req, res, next){
    var requiredFields = (fields instanceof Array)? fields : [fields];
    var bodyFields = Object.keys(req.body);

    var missingFields = [];

    requiredFields.forEach(function(field){
      if (bodyFields.indexOf(field) == -1)
        missingFields.push(field);
    });

    console.log('missing fields:', missingFields);
    if (missingFields.length > 0)
      return res.status(400).send('Missing fields ' +  missingFields);

    next();
  };
};
