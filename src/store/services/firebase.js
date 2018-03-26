import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDgyZIFQndCH4lPv1d2AP1O0-xGtIcLwek',
  authDomain: 'marvel-heroes-de669.firebaseapp.com',
  databaseURL: 'https://marvel-heroes-de669.firebaseio.com',
  projectId: 'marvel-heroes-de669',
  storageBucket: 'marvel-heroes-de669.appspot.com',
  messagingSenderId: '47816047424',
};
firebase.initializeApp(config);

export const authentication = firebase.auth();
export const database = firebase.database();
