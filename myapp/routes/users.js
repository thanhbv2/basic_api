var express = require('express');
const app = express();
const db = require('../models');


// // raw query
// const sequelize = db.sequelize;
// sequelize.query('select * from users limit 20').then(result => {
//   console.log('===============>', result);
// })


app.get('/users', async (req, res, next) => {
  try {
    const query = req.query; // Lấy thông tin query trên url
    const id = req.params;
    const response = await db.UsersTest.findAll();
    res.status(200).json(response)
  } catch (error) {
    throw Error(error.message)
  }
})

app.get('/users/:id', async (req, res, next) => {
  try {
    // Lấy thông tin params trên url
    const id = req.params;
    const response = await db.UsersTest.findOne({ where: { id } })
  } catch (error) {
    throw Error(error.message)
  }
})




// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = app;
