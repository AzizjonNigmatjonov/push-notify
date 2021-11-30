importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '868220141291'
});
const messaging=firebase.messaging();

messaging.setBackgroundMessagingHandler(function (payload) {
    console.log(payload);
})