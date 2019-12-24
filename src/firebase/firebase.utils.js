import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyCRyfDt2DVlUBLRq0VUHdT9s_8U3gbKv_c",
        authDomain: "votostock-db.firebaseapp.com",
        databaseURL: "https://votostock-db.firebaseio.com",
        projectId: "votostock-db",
        storageBucket: "votostock-db.appspot.com",
        messagingSenderId: "978218137693",
        appId: "1:978218137693:web:60770bb8a774692321f5b4",
        measurementId: "G-GZH19N4EDS"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
      

