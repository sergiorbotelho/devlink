
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBSFKPzgLKM8-67uwacf62ag8mpnbCqh-w",
    authDomain: "devslinks.firebaseapp.com",
    projectId: "devslinks",
    storageBucket: "devslinks.appspot.com",
    messagingSenderId: "1022704349491",
    appId: "1:1022704349491:web:7712d5fb1de6d9f3e80e46",
    measurementId: "G-LMT108GTP9"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
