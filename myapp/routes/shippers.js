var express = require('express');
const db = require('../models');
// const app = express();

const router = express.Router();



router.get('/shippers', async (req, res, next) => {
  try {
    const query = req.query; // Lấy thông tin query trên url
    const id = req.params;
    const response = await db.Shipper.findAll();
    res.status(200).json({ result: response, httpCode: 200 })
  } catch (error) {
    throw Error(error.message)
  }
})

router.get('/shippers/:id', async (req, res, next) => {
  try {
    // Lấy thông tin params trên url
    const id = req.params;
    const response = await db.UsersTest.findOne({ where: { id } })
  } catch (error) {
    throw Error(error.message)
  }
})

router.put('/shippers', async (req, res, next) => {
  const data = req.body;
  const test = '';
  console.log('===============>', data);
  // Select * from shipper where name = data.name;
  try {
    const shipper = await db.Shipper.findOne({ where: { name: data.name } })
    if (!shipper) {
      return res.status(400).json({ httpCode: 400, message: 'Shipper khong ton tai trong he thong', name: "UPDATE_SHIPPER_ERROR" })
    }

    // validation data
    const validation = validateData(data);

    if (!validation.status) {
      return res.status(400).json({ failures: validation.failures, name: "UPDATE_SHIPPER_ERROR", httpCode: 400 })
    }
    // UPDATE shippers
    // SET name = data.name, email = data.emai, ...
    // WHERE condition;
    const response = await db.Shipper.update(data, { where: { name: data.name }, returning: true });
    if (response)
      res.status(200).json({ response, httpCode: 200 })
  } catch (error) {
    throw Error(error.message)
  }
})

router.post('/shippers', async (req, res, next) => {
  const data = req.body;
  // validation cho data

  try {
    // insert into shippers values (,); 
    const response = await db.Shipper.create(data);
    if (response) {
      res.status(200).json({ httpCode: 200, result: response })
    }
  } catch (error) {
    throw Error(error.message)
  }
})

router.delete('/shippers/:shipperId', async (req, res, next) => {
  const { shipperId } = req.params;
  console.log('===============>re', req.params);

  try {
    const response = await db.Shipper.destroy({ where: { id: shipperId } })
    console.log('===============>', response);
    res.status(200).json({ httpCode: 200, message: "xoa thanh cong" });
  } catch (error) {
    throw Error(error.message)
  }
})

function validateData(data) {
  const result = {
    status: true,
    failures: [],
  }
  // Dinh nghia truoc bat buoc cua shipper do minh dat ra yeu cau
  const requireProperty = [
    { field: 'name', title: 'Name' },
    { field: 'email', title: 'Email' },
    { field: 'mobile', title: 'Mobile' },
  ]

  requireProperty.forEach((pro) => {
    if (!data[pro.field] || data[pro.field] === '') {
      result.status = false;
      result.failures.push({ field: pro.field, message: `Please input ${pro.title}` });
    }
  })


  // Kiem tra email dung dinh dang va co ton tai trong he thong hay khong
  if (isValidEmail()) {

  }

  // // Kiem tra nam co bi trung hay khong
  if (isValidName()) {

  }




  return result;
}

function isValidEmail() { }
function isValidName() { }


module.exports = router;

// // raw query
// const sequelize = db.sequelize;
// sequelize.query('select * from users limit 20').then(result => {
//   console.log('===============>', result);
// })
