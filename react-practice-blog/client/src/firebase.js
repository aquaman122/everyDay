// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3rX-7yIVAfOqrza3C7Pf1HMg1BCmoSV4",
  authDomain: "practice-blog-45544.firebaseapp.com",
  projectId: "practice-blog-45544",
  storageBucket: "practice-blog-45544.appspot.com",
  messagingSenderId: "1018319462447",
  appId: "1:1018319462447:web:03ad2d140b056f00a8a6da",
  measurementId: "G-VHXEFYL3YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };