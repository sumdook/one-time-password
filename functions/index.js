const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const requestOtp = require('./request_otp');

const serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-c83eb.firebaseio.com"
});


exports.createUser = functions.https.onRequest(createUser);
exports.createUser = functions.https.onRequest(requestOtp);

