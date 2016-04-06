module.exports = function(server){
  var Schema = server.models.mongoose.Schema;
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
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  });

  return server.models.mongoose.model('Job', JobSchema);
};
