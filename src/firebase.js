import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkl2gPl1STU3UMtraKRYpj2jdhY7UWWGc",
    authDomain: "todoapp-a96f7.firebaseapp.com",
    databaseURL: "https://todoapp-a96f7.firebaseio.com",
    projectId: "todoapp-a96f7",
    storageBucket: "todoapp-a96f7.appspot.com",
    messagingSenderId: "914569751516",
    appId: "1:914569751516:web:75ce082424fde8a666bd19",
    measurementId: "G-PZD1R6H7GY"
  })

  const db = firebase.firestore();

  export default db;