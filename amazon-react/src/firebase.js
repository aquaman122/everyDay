// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsXYIDUyNZsB2KQF8g8VNfhWF3CaFywFA",
  authDomain: "clone-c2851.firebaseapp.com",
  projectId: "clone-c2851",
  storageBucket: "clone-c2851.appspot.com",
  messagingSenderId: "797402447498",
  appId: "1:797402447498:web:d78a7f91a58bc05d0c7773",
  measurementId: "G-RQLTV26V8L"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };