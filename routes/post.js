const express = require('express');
const app = express();
const router = express.Router()
const Verify = require('../middleware/verifytoken')
const {userpost} = require('../controller/post')

router.post('/post',Verify, userpost)



module.exports = router