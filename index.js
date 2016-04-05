var parseDir = require('./parseDir');


parseDir('.', function(err, data){
  if (err)
    return console.error('ERROR: ', err);

  console.log(data)
})
