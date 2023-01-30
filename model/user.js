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
  email: {
    type: String,
    default: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', userSchema)
