/**
* Replace values below with your Firebase project's config.
* To get this: Firebase Console -> Project settings -> Your apps -> SDK setup and config
*/


// Example (replace with real values):
const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "SENDER_ID",
appId: "APP_ID",
};


// Load Firebase (compat) from CDN
(function(){
const s1 = document.createElement('script'); s1.src = 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js'; document.head.appendChild(s1);
const s2 = document.createElement('script'); s2.src = 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js'; document.head.appendChild(s2);
const s3 = document.createElement('script'); s3.src = 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js'; document.head.appendChild(s3);
const s4 = document.createElement('script'); s4.src = 'https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js'; document.head.appendChild(s4);
s4.onload = () => {
// init
firebase.initializeApp(firebaseConfig);
window.firebaseApp = firebase;
window.auth = firebase.auth();
window.db = firebase.firestore();
window.messaging = firebase.messaging();
}
})();


/*
Notes:
- In Firebase console enable: Authentication (Email/Password), Firestore database (in your region), and Cloud Messaging if you plan to use FCM.
- After deploying and testing, create the master user in Firebase Auth and add a doc in `users/{uid}` with { role: 'master' }
- For security, use Firestore security rules (see README) to restrict reads/writes to owner or master.
*/
