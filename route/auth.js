const express = require('express');
const router = express.Router();

const {login, signup} = require('../controller/authController')


router.get('/login',login)
router.get('/signup',signup)


module.exports =  router;