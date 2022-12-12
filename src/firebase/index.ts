import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/storage';

const config = {
  apiKey: "AIzaSyD1nR1BRwuz5Jyil1JsfJYHzaZC-GsCef0",
  authDomain: "sai-do-aperto.firebaseapp.com",
  databaseURL: "https://sai-do-aperto.firebaseio.com",
  projectId: "sai-do-aperto",
  storageBucket: "sai-do-aperto.appspot.com",
  messagingSenderId: "530758212666",
  appId: "1:530758212666:web:a1d37f8638a24b9292a903",
  measurementId: "G-1FKZJVFCVM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

export default firebase;
