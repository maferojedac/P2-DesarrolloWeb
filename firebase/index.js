const firebase = require("firebase-admin");
const serviceAccount = require("../key.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

// Create db and a collection within it
const db = firebase.firestore();

module.exports = {
  db
}