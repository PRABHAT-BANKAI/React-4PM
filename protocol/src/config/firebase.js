// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKjk2SLtnLtSXtCruTcHjkjDbYSuoSyl0",
  authDomain: "protocol-39da3.firebaseapp.com",
  projectId: "protocol-39da3",
  storageBucket: "protocol-39da3.firebasestorage.app",
  messagingSenderId: "786011005098",
  appId: "1:786011005098:web:216664406ac7f5b405b0d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export { auth, provider };
