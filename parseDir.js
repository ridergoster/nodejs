var path = require('path');
var fs = require('fs');

function parse(dirPath, callback){
  fs.lstat(dirPath, function(err, stat){
    if(stat.isFile())
      return callback(path,'is not a directory');

    fs.readdir(dirPath, function(err, files){
      if(err)
        callback(err);

        files.forEach(function(file){
          var localPath = path.join(dirPath, file)
          fs.lstat(localPath, function(err, stat){

            if (stat.isFile())
              callback(null, ' '.repeat(2*localPath.split('/').length).concat(file).concat('[F]'))

            else{
              callback(null, ' '.repeat(2*localPath.split('/').length).concat(file).concat('[D]'))
              parse(path.join(dirPath, file), callback);
            }
          })
        })
    })
  })
}


module.exports = parse;
