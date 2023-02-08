const express = require('express');
const app = express();
const Post = require('../model/post')
const multer = require('multer')
const cloudinary = require('../middleware/image')



const userpost = async (req, res) => {
  
  const {tittle, description} = req.body

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      width: 500,
      height: 500,
      crop :"fill"
    })
  
  
    const post = new Post({
      userId:req.user,
      tittle,
      description,
      photo:result.url
    })
    const savedpost = await post.save()
            res.json({
              status: 200,
              message: 'property posted  successful',
              successfull:true,
              data:savedpost
    })
  
  } catch (error) {
    console.log(error);
  }
  
}
module.exports = {userpost}