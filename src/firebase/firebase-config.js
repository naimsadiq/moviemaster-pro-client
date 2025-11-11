// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT-pg0MUewPQgTMRBaP2j5K9dlfldOj_I",
  authDomain: "moviemaster-pro-31bb4.firebaseapp.com",
  projectId: "moviemaster-pro-31bb4",
  storageBucket: "moviemaster-pro-31bb4.firebasestorage.app",
  messagingSenderId: "354345351311",
  appId: "1:354345351311:web:120dae0026c0ca40a6d8fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
