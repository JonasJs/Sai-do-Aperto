import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDOzkTD3GlF5zREanrfnPHlf5HzP1ZnYio',
  authDomain: 'appraidsgo.firebaseapp.com',
  databaseURL: 'https://appraidsgo.firebaseio.com',
  projectId: 'appraidsgo',
  storageBucket: 'appraidsgo.appspot.com',
  messagingSenderId: '193873921158',
  appId: '1:193873921158:web:cd9bde6dea9e3e6338fd07',
  measurementId: 'G-0MM1NDPRZV',
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
