import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
 
const firebaseConfig  = {
    apiKey: "AIzaSyBpuR-S22M0WnCo0-iQI94Fo5E1r7ALedc",
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;
