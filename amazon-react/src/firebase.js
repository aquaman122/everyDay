import { initializeApp } from 'firebase/app';

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

const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };