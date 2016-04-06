module.exports = function(server){
  var UserSchema = server.models.mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    firstName: {
      type: String,
      default: 'foo'
    },
    lastName: {
      type: String,
      default: 'bar'
    }
  });

  return server.models.mongoose.model('User', UserSchema);
};
