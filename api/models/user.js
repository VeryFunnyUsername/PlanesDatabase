const mongoose = require('mongoose');

//model użytkownika pobierając dane z Google
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  googleId: String
});

const User = mongoose.model('user', userSchema);
module.exports = User;