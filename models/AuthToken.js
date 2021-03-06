module.exports = function(server){
  var Schema = server.models.mongoose.Schema;
  var AuthTokenSchema = server.models.mongoose.Schema({
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    createdAt: {
      type: Date,
      expires: 360000
    }
  });

  return server.models.mongoose.model('AuthToken', AuthTokenSchema);
};
