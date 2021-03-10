// import * as firebase from 'firebase'
import firebase from 'firebase/app';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyA2u6wJ78Ii_NiyGD4nN82UCHb6lQv6UrM",
    authDomain: "booksanta-fe25e.firebaseapp.com",
    projectId: "booksanta-fe25e",
    storageBucket: "booksanta-fe25e.appspot.com",
    messagingSenderId: "171727552707",
    appId: "1:171727552707:web:4280962a2af5c17dba2276"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()