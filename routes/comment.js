const express = require('express');
const app = express();
const verify = require('../middleware/verifytoken')
const router = express.Router()

const postComment = require('../controller/comment');


router.post('/post/:id/comment',verify, postComment )



module.exports = router


