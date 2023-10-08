import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCQvmn_DF80Rb_KdNzZcAaA4ie9QeDL9ws",
    authDomain: "vehealth-790ba.firebaseapp.com",
    projectId: "vehealth-790ba",
    storageBucket: "vehealth-790ba.appspot.com",
    messagingSenderId: "386448309219",
    appId: "1:386448309219:web:954c68f73c3945575dbed6",
    measurementId: "G-6HTY3RTTTM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
