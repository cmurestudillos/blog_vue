import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
 
const firebaseConfig  = {
    apiKey: "AIzaSyBpuR-S22M0WnCo0-iQI94Fo5E1r7ALedc",
    authDomain: "blogframeworks.firebaseapp.com",
    databaseURL: "https://blogframeworks.firebaseio.com",
    projectId: "blogframeworks",
    storageBucket: "blogframeworks.appspot.com",
    messagingSenderId: "291878683328",
    appId: "1:291878683328:web:c4595fc170cfc731f6a325",
    measurementId: "G-2W9Y94K8SB"
};

firebase.initializeApp(firebaseConfig);

export default firebase;