import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyBkASziFYXhUiKN3zSeYvtkNATWNVRPixo",
  authDomain: "lim014-siderperu.firebaseapp.com",
  projectId: "lim014-siderperu",
  storageBucket: "lim014-siderperu.appspot.com",
  messagingSenderId: "968808988602",
  appId: "1:968808988602:web:b9da00409cee6a31b9a783"
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
export const auth = fb.auth();