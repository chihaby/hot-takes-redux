const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.newMessageAlert = functions.database.ref('/messages/{message}')
  .onWrite((event) => {
    const message = event.data.value();

    const getTokens = admin.database().ref('users').once('value').then((snapshot) => {
      const tokens = [];
      snapshot.forEach((user) => {
        const token = user.child('token').val();
        if (token) tokens.push(token);
      });
      return tokens;
    });
    const getAuthor = admin.auth().getUser(message.uid);

    // Waits for all promises to complete
    Promise.all([getTokens, getAuthor]).then((results) => {
      const tokens = results[0];
      const author = results[1];
    // or if you know you are getting an array we could destructure it and use .then(([tokens, author]))
      const payload = {
        notification: {
          title: `Hot take from ${author.displayName}`,
          body: message.content,
          icont: author.photoURL
        }
      };
      admin.messaging().sendToDevice(tokens, payload).catch(console.error);
    });
  });