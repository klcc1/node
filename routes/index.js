var express = require('express');
var router = express.Router();
var cate = require('../cateControllers/cateControllers')

router.get('/',cate.getCate);
router.get('/getPostCate',cate.getPostCate)
module.exports = router;
