const express = require('express');
const app = express();
const router = express.Router()
const Post = require('../model/post')
const mongoose = require('mongoose')
const Verify = require('../middleware/verifytoken')

const getUser = require('../controller/get')


router.get('/get', Verify, getUser)



module.exports = router