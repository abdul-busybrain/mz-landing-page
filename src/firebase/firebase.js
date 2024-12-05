// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf3FRMPUxVGqAP3i5H7q4kNbqCD4zc0kk",
  authDomain: "mozodb.firebaseapp.com",
  projectId: "mozodb",
  storageBucket: "mozodb.firebasestorage.app",
  messagingSenderId: "17666064845",
  appId: "1:17666064845:web:aaf58c7b46345651ae8484",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
