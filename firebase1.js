// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_FYLv_7LMvfBCFFlt2sK7od5wwaWwGrg",
  authDomain: "sensetech-e8115.firebaseapp.com",
  projectId: "sensetech-e8115",
  storageBucket: "sensetech-e8115.firebasestorage.app",
  messagingSenderId: "814283642254",
  appId: "1:814283642254:web:7d09260cd77d5f01d600df",
  measurementId: "G-WH5TZBJX7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);