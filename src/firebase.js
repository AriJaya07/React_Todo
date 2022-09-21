import firebase from "firebase";
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAIZbX1eKE3gQFO4w3nIu6mZ9QgPp-e5o",
    authDomain: "todo-app-cp-97787.firebaseapp.com",
    projectId: "todo-app-cp-97787",
    storageBucket: "todo-app-cp-97787.appspot.com",
    messagingSenderId: "267814969708",
    appId: "1:267814969708:web:a7ab7544271bbf5bb05349",
    measurementId: "G-M2HNSPN26B"
});

const db = firebaseApp.firestore();

export default db;