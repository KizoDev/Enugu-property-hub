const express = require('express');
const app = express();
const Comment = require('../model/comment');

const postComment = async (req, res) => {
    const {id} = req.params
    req.user.password = undefined
    const comment = new Comment ({
        postedBy:req.user,
        text:req.body.text,
        postId:id
    })
    const comments = await comment.save()
    const popcomments = await comments
    .populate("postId" )
    //.exec()

    if (!comments) {
        res.json({
            status: 401,
            message: 'comment unsuccessful',
            successfull:false,
            comment:null,
          })
    }
    res.json({
        status: 200,
        message: 'comment post successful',
        successfull:true,
        comment:popcomments,
      })
}
module.exports = postComment