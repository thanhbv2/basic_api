const express = require('express');
const app = express();
const router = express.Router();
const ShipperRoute = require('./shippers');
const LoginRoute = require('./login');
app.use('/', (req, res, next) => res.json({ message: "hello world" }))
app.use('/', LoginRoute);
app.use('/', ShipperRoute.getInstance().registerRoute(router));

module.exports = router;
