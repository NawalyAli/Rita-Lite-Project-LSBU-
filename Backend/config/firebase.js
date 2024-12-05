const admin = require('firebase-admin');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

var serviceAccount = require("./rita-lite-thomas-firebase-adminsdk-8xeqo-457738cbd6.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rita-lite-thomas.firebaseio.com",
  
  });

// Initialize Firestore
const db = getFirestore();

module.exports = { admin, db };
