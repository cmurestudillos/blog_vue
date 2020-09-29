import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
 
const firebaseConfig  = {
    apiKey: "XXXXXXX",
    authDomain: "XXXXXXX",
    databaseURL: "XXXXXXX",
    projectId: "XXXXXXX",
    storageBucket: "XXXXXXX",
    messagingSenderId: "XXXXXXX",
    appId: "XXXXXXX",
    measurementId: "XXXXXXX"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
