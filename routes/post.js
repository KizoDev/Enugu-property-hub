const express = require('express');
const app = express();
const router = express.Router()
const Verify = require('../middleware/verifytoken')
const multer = require("multer")
const cloudinary = require('../middleware/image')
const {userpost} = require('../controller/post')

const storage = multer.diskStorage({}) 

const fileFilter = (req, file, cb) =>{
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
cb('invalid image', false)
    }
}

const uploads = multer({storage, fileFilter })


router.post('/upload',Verify, uploads.single('photo'), userpost)


module.exports = router