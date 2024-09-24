// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

fetch('./environment.json').then(function(response) {
    if (!response.ok) {
        console.log('Error starting Firebase ServiceWorker - failed to read environment', response.status);
    }

    return response.json();
}).then(function(data) {
    if (!data?.firebaseConfig) {
        console.log("Error starting Firebase ServiceWorker - environment didn't contain firebaseConfig object");
    }

    console.log('Initialising Firebase ServiceWorker for projectId', data?.firebaseConfig?.projectId);

    // Initialize the Firebase app in the service worker by passing in
    // your app's Firebase config object.
    // https://firebase.google.com/docs/web/setup#config-object
    firebase.initializeApp(data.firebaseConfig);

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging();

    /* We don't need to do the extra background message notification handling, this is already done for us
       At least on Chrome and Firefox

    messaging.onBackgroundMessage((payload) => {
        console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
        );
        // Customize notification here
        const notificationTitle = 'Background Message Title';
        const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
        };
    
        self.registration.showNotification(notificationTitle, notificationOptions);
    });
    */
});