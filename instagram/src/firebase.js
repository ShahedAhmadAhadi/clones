import firebase from 'firebase'

const firebaseConfig1 ;

const firebaseApp = firebase.initializeApp(process.env.firebaseConfig)
console.log(process.env.firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}