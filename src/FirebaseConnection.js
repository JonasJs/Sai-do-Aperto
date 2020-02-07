import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD1nR1BRwuz5Jyil1JsfJYHzaZC-GsCef0',
  authDomain: 'sai-do-aperto.firebaseapp.com',
  databaseURL: 'https://sai-do-aperto.firebaseio.com',
  projectId: 'sai-do-aperto',
  storageBucket: 'sai-do-aperto.appspot.com',
  messagingSenderId: '530758212666',
  appId: '1:530758212666:web:a1d37f8638a24b9292a903',
  measurementId: 'G-1FKZJVFCVM',
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
