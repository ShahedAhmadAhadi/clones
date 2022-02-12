import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCn5oniXrXjfMNR8LUTaJQUNWMnEm-zGJs",
    authDomain: "instagram-clone-d35f6.firebaseapp.com",
    projectId: "instagram-clone-d35f6",
    storageBucket: "instagram-clone-d35f6.appspot.com",
    messagingSenderId: "508362622286",
    appId: "1:508362622286:web:355a2599cadd5d3283ca1f",
    measurementId: "G-7TFB3LHPXF"
  };

// const firebaseApp = firebase.initializeApp(process.env.FIREBASECONFIG)
const firebaseApp = firebase.initializeApp(firebaseConfig)
console.log(firebaseApp);

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}