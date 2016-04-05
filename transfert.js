module.exports = function(callback){
  var progress = 0;
  var end = 1 + parseInt(Math.random() * 10)

  var handle = setInterval(function(){
    progress+= 1;
    console.log('progress:', progress);

    if(progress >= end){
      clearInterval(handle);
      callback();
    }

  }, 500);
}
