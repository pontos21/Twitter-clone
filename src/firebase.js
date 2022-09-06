import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAtW1ozdg_6mkwn6UqD9hwn4OlezCf0KJY",
    authDomain: "twitter-clone-fb0aa.firebaseapp.com",
    projectId: "twitter-clone-fb0aa",
    storageBucket: "twitter-clone-fb0aa.appspot.com",
    messagingSenderId: "849256095876",
    appId: "1:849256095876:web:a1dd0ce71d3de120b362d1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;