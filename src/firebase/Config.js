import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBReoFD10Jl_6VEq9oFvD1E_J_LmgnVyn8",
    authDomain: "flipkart-beeb4.firebaseapp.com",
    projectId: "flipkart-beeb4",
    storageBucket: "flipkart-beeb4.appspot.com",
    messagingSenderId: "848917937823",
    appId: "1:848917937823:web:f759da8e28fdbe14562caa",
    measurementId: "G-3WHL95EV7L"
  };





  export default firebase.initializeApp(firebaseConfig)