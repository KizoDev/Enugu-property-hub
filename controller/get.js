const express = require('express');
const app = express();
const Post = require('../model/post')
const mongoose = require('mongoose')

const getUser = async (req, res) => {
 
  const post = await Post.aggregate([
     {
            $lookup:{
                from:"users",
                localField:"postedBy",
                foreignField:"_id",
                as:"users",
            },
        },
        {
          $unwind:{
            path: "$users",
          preserveNullAndEmptyArrays: true,
          }
        },
        {
            $lookup:{
                from:"comments",
                localField:"_id",
                foreignField:"post_id",
                as:"comments"
            },
        },
        {
          $unwind:{
            path: "$comments",
          preserveNullAndEmptyArrays: true,
          }
        },
       // { $addFields: {comment_count: { $size: "$comments" } } }
   ])
   .exec()
    if (!post) {
        return res.json({
        status:401,
        massage:' no post to display' ,
        successfull:false,
        data:null
        })
    }
    return res.json({
    status:200,
    massage: 'successfull posts',
    successfull:true,
    post:post
     })
}


module.exports = getUser