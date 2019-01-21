const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models');

const router = express.Router();


router.post('/register', async (req, res, next) => {
  let { username, password, email } = req.body;

  try {
    // const validation = validationData(req.body);
    // rulse password --> it nhat 6 ký tự và có chữ hoa
    // rule email, username
    const validation = { status: true }
    if (!validation.status) {
      res.status(400).json({ message: 'Invalid data' })
    }
    var salt = await bcrypt.genSalt(10);
    let hashPass = await bcrypt.hash(password, salt);

    const response = await db.User.create({
      username,
      password: hashPass,
      email
    })

    if (response) {
      res.status(200).json({ resutl: response, httpCode: 200 })
    } else {
      next()
    }

  } catch (error) {
    throw Error(error.message)
  }
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await db.User.findOne({ where: { username } });
    if (!user) {
      res.status(400).json({ httpCode: 400, message: 'User khong ton tai' })
    }

    const isValidPass = await bcrypt.compare(password, user.password);
    if (!isValidPass) {
      res.status(401).json({ httpCode: 401, message: 'Password invalid' })
    }
    res.status(200).json({ message: 'login thanh cong', httpCode: 200 });


  } catch (error) {

  }


})

module.exports = router;
