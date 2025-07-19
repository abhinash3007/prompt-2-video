// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "prompt-2-video.firebaseapp.com",
  projectId: "prompt-2-video",
  storageBucket: "prompt-2-video.firebasestorage.app",
  messagingSenderId: "336122604176",
  appId: "1:336122604176:web:738e906c9889efe40d0615",
  measurementId: "G-VGJRSBRMJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);