import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyDck-Bc3mpfxNpNdGC3AnvCKq7uKrUXthE",
  authDomain: "project-58-a76a3.firebaseapp.com",
  databaseURL: "https://project-58-a76a3-default-rtdb.firebaseio.com",
  projectId: "project-58-a76a3",
  storageBucket: "project-58-a76a3.appspot.com",
  messagingSenderId: "292719705719",
  appId: "1:292719705719:web:6bbb17a4fc287a97699072"
};
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
