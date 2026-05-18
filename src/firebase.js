// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // علشان نستخدم تسجيل الدخول
import { getFirestore } from "firebase/firestore"; // لو هتسجل بيانات في قاعدة البيانات

const firebaseConfig = {
  apiKey: "AIzaSyBa5AqS-qULxSnimSyxUO8J74E_xRYiVn8",
  authDomain: "papa-johns-bd352.firebaseapp.com",
  projectId: "papa-johns-bd352",
  storageBucket: "papa-johns-bd352.appspot.com",
  messagingSenderId: "61120473469",
  appId: "1:61120473469:web:0205244a40f25d571b0414",
  measurementId: "G-F92RK7X6KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
