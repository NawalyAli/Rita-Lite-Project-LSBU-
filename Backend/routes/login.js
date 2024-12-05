const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db } = require('../config/firebase');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send('Missing fields.');

  try {
    const userDoc = await db.collection('users').doc(email).get();
    if (!userDoc.exists) return res.status(404).send('User not found.');

    const user = userDoc.data();
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send('Invalid credentials.');

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
