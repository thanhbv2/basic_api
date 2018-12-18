var express = require('express');
var router = express.Router();
const usersRoute = require('./users');
/* GET home page. */
router.use('/', usersRoute)


module.exports = router;
