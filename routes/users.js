var express = require('express');
var router = express.Router();
var User = require('../cateControllers/UserController')

router.post('/sendCode',User.sendCode )

module.exports = router;
