import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDkq5Yy-s9FoXfSoJXwlEBkeI65GzXvKKM",
    authDomain: "e-store-3ca1d.firebaseapp.com",
    databaseURL: "https://e-store-3ca1d.firebaseio.com",
    projectId: "e-store-3ca1d",
    storageBucket: "e-store-3ca1d.appspot.com",
    messagingSenderId: "802827301197",
    appId: "1:802827301197:web:b52aa3ab6f20568f988704",
    measurementId: "G-B6NB4K99W9"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;