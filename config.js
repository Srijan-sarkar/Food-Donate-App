import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDOj6RZNjGBC_k9rWQd_EFqCGRCxIcYWiI",
    authDomain: "donate-food-app-23fa6.firebaseapp.com",
    projectId: "donate-food-app-23fa6",
    storageBucket: "donate-food-app-23fa6.appspot.com",
    messagingSenderId: "758045328968",
    appId: "1:758045328968:web:c6ea316ae499d943783a7d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);