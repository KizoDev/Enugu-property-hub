const express = require('express');
const router = express.Router()

const {resetPassword} = require('../controller/resetPassword')

const {addNewPassword} = require('../controller/resetPassword')

router.post('/addNewPassword', addNewPassword)
router.post('/resetPassword', resetPassword)


module.exports = router
