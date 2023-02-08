const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
}, {timestamps:true})


module.experts = mongoose.model('Comment', commentSchema)