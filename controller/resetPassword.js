const User = require('../model/user')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')
require('dotenv').config();


let mailTransporter = nodemailer.createTransport({
    host: "premium108.web-hosting.com",
    port: 465,
    secure: true,
    auth : {
      user : 'nesitest@andyke.net',
      pass : "ikechukwuapeh"
    },
    t1s:{
      rejectUnauthorized : false
    }
})
  


const resetPassword = (req, res) => {
    crypto.randomBytes(32,(err, buffer) =>{
        if (err) {
            console.log(err);
        }
    
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user => { 
            if (!user) {
              return res.json({
                  status:401,
                  massage:'no user with the enail',
                  successfull:false,
                  data:null
                  })
            }
        user.resetToken = token
        user.expireToken = Date.now() + 360000
        user.save().then((result) =>{
              mailTransporter.sendMail({
                  to:user.email,
                  from:"nesitest@andyke.net ",
                  subject:"password reset",
                  html:`<p> you requested for password reset </p>
                  <h5> click on this <a href ="http://localhost:7000/addNewPassword/${token}/${user._id}">link</a> to reset your password </h5>`
              })
              return res.json({
                  status:201,
                  massage:'check your email',
                  successfull:true
              })
            })
      })
   })
};

const addNewPassword = async(req, res) => {
    const newPassword = req.body.newPassword
    const sentToken = req.body.resetToken
    const userId = req.body.userId
    const user = await User.findById(userId)
      if (user == null) {
        return res.json({
            status:401,
            massage:'userId is invalid',
            successfull:false,
            data:null
            })
      }
      if (user.resetToken != sentToken) {
        return res.json({
            status:401,
            massage:'token is invalid',
            successfull:false,
            data:null
            })
      }
  
      const hashpassword = await bcrypt.hash(newPassword, 10)
      user.password = hashpassword
      const updateuser = await User.updateOne({_id:userId}, user  )
      if (updateuser) {
        return res.json({
            status:200,
            massage:'user password updated',
            successfull:false,
            data:null
            })
      }
      
    }

module.exports = {resetPassword, addNewPassword }