import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(process.env.firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}