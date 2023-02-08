const express = require('express')
const app = express()
const router = express.Router()
const Verify = require('../middleware/verifytoken')


const {message, getAlllMessage } = require('../controller/message')

router.post('/message',Verify, message )

router.get('/getMessages/:convoId', Verify, getAlllMessage)


module.exports = router