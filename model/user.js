const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  password: {
    type: String,
    default: true,
  },
  resetToken: String,
  expireToken:Date,
  email: {
    type: String,
    default: true,
  },
  
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)
