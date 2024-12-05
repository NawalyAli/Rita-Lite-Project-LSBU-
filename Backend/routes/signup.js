const express = require('express');
const bcrypt = require('bcrypt');
const { db } = require('../config/firebase');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { firstname, lastname, email, password, address, phonenumber,dateofbirth } = req.body;

  if (!firstname || !lastname || !email || !password
    || !address || !phonenumber || !dateofbirth) return res.status(400).send('Missing required fields.');

  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = {
      firstname,
      lastname,
      email,
      password: hashedPassword,
      dateofbirth,
      phonenumber,
      address,
    };

    await db.collection('users').doc(email).set(user);
    res.status(201).send('User registered successfully.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
