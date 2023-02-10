import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbEBBDmx0NEGWbfrE54_VAjY6WBDBvknA",
  authDomain: "fire-chat-d81b9.firebaseapp.com",
  projectId: "fire-chat-d81b9",
  storageBucket: "fire-chat-d81b9.appspot.com",
  messagingSenderId: "980044843300",
  appId: "1:980044843300:web:12879587e45f2d9e1b4bb1",
  measurementId: "G-2W00KJ6W2T"
})

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}
