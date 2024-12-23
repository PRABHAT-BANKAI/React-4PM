// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKRorSGV1THwc_ecDdvWo-z-HI3Ydz06s",
  authDomain: "auth-protocol-16924.firebaseapp.com",
  projectId: "auth-protocol-16924",
  storageBucket: "auth-protocol-16924.firebasestorage.app",
  messagingSenderId: "112725244103",
  appId: "1:112725244103:web:5b88f700edd797f2caa6e2",
  measurementId: "G-10BFX2CEGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {auth}