importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

const config = {
  messagingSenderId: '335955122918'
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  const title = payload.title;
  const options = {
    body: payload.body,
    icon: payload.icon
  } ;
  self.registration.showNotifications(title, options);
});