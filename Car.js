module.exports = Car

function Car(name){
 this.name = name || 'unknown'
}

Car.prototype = {
  name: null
};

Car.prototype.start = function(){
  console.log(this.name, 'started');
};
