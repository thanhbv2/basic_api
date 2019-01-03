const express = require('express');
const app = express();
const router = express.Router();
const ShipperRoute = require('./shippers');

app.use('/', ShipperRoute.getInstance().registerRoute(router));

module.exports = router;
