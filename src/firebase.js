// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);