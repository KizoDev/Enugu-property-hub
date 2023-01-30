const express = require('express');
const { Mongoose } = require('mongoose');
const app = express();
const router = express.Router()
const verify = require('../middleware/verifytoken')

const getAllUser = require('../controller/getuser')

router.get('/getuser/:id', verify, getAllUser)




module.exports = router