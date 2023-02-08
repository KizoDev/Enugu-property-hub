const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
    },
    tittle:{
        type:String,
        required:true
    },
    description:{
      type:String,
      required:true
  },
  photo:{
    type:String,
    required:true
},
  
}, {timestamps:true}
)
module.exports = mongoose.model('Post', postSchema)