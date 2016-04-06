module.exports = function(server){
  var JobSchema = server.models.mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: String,
    salary: {
      type: Number,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    }
  });

  return server.models.mongoose.model('Job', JobSchema);
};
