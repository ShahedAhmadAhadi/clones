import firebase from 'firebase'

const 

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}