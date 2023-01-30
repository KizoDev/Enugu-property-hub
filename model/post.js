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
    type:String
},
    date:{
        type:Date,
        default:Date.now
    },
    Comment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'comment'
    }
})
module.experts = mongoose.model('Post', postSchema)