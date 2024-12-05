const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Firebase Admin SDK
const { admin, db } = require('./config/firebase');

// Initialize Firebase Admin SDK
const firebaseConfig = {
  apiKey: "AIzaSyBJ7190KwFQEsAh0_e8hrD_KDc2GxL0XBU",
  authDomain: "rita-lite-thomas.firebaseapp.com",
  projectId: "rita-lite-thomas",
  storageBucket: "rita-lite-thomas.firebasestorage.app",
  messagingSenderId: "139438245434",
  appId: "1:139438245434:web:47475c8f0e6d24e04e1703",
  measurementId: "G-EYD2TK5L21"
};

// Import routes
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api', signupRoute);
app.use('/api', loginRoute);


// Initialize Express Router
const port = process.env.PORT || 5000;

// route said "Hello World" means the server is running
app.get('/', (req, res) => {
    res.send('Hello World');
  });

// Writing data to Firestore
const docRef = db.collection('who testing?').doc('abdul');
docRef.set({
  testField: 'Hello Firebase, Abdul here!'
})
.then(() => {
  console.log('Document successfully written!');
})
.catch((error) => {
  console.error('Error writing document: ', error);
});

// Reading data from Firestore
docRef.get().then((doc) => {
  if (doc.exists) {
    console.log('Document data:', doc.data());
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});