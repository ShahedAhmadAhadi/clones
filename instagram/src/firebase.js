import firebase from 'firebase'
import { firebaseConfig } from './.firebase.js'
 
const firebaseApp = firebase.initializeApp(firebaseConfig)
// const firebaseApp = firebase.initializeApp(process.env.REACT_APP_FIREBASE)
console.log(firebaseApp);

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}