import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB5CT3F_t766MzqL5npP9PPLl6Egklx69U",
    authDomain: "collab-share-ab29e.firebaseapp.com",
    projectId: "collab-share-ab29e",
    storageBucket: "collab-share-ab29e.appspot.com",
    messagingSenderId: "304303490743",
    appId: "1:304303490743:web:a203f4242783a0eedfaf32"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore,projectAuth,projectStorage,timestamp }