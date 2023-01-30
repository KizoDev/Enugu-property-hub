const express = require('express');
const app = express();
const Post = require('../model/post')

const userpost = async (req, res) => {
    const {tittle, description, photo} = req.body
    const post = new Post ({
        tittle,
        description,
        photo,
        userId:req.user

    })
    if (!post) {
        return res.json({
        status:401,
        massage:(`No post with id : ${userId}`),
        successfull:false,
        data:null
        })
    }
    
      res.json({
        status: 200,
        message: 'post successful',
        successfull:true,
        data:post
      })
}

module.exports = {userpost}

