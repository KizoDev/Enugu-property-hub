const express = require('express');
const { Mongoose } = require('mongoose');
const app = express();
const Post = require('../model/post');
const mongoose = require('mongoose')



const getAllUser = async (req, res) => {
  req.user.password = undefined
  const post_id = req.params.id
   const post = await Post.aggregate([
    {
      $match: { _id: mongoose.Types.ObjectId(post_id)}    },
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
            as:"comments",
        },
    },
    {
      $unwind:{
        path: "$comments",
      preserveNullAndEmptyArrays: true,
      }
    },
   ])
   .exec();

   if (!post) {
    return res.json({
    status:401,
    massage:' no post to display' ,
    successfull:false,
    data:null
    })
    }
        res.json({
        status:200,
        massage: 'successfull posts',
        successfull:true,
        post:post
        })
    
} 

module.exports = getAllUser