var express = require('express');
var router = express.Router();
const shipperRoute = require('./shippers');
/* GET home page. */
router.use('/', shipperRoute)


module.exports = router;
