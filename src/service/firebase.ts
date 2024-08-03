import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5GRVLADtC9wo5GBpQkb7nOAAN3cQZ4S4",
    authDomain: "react-counter-app-7ac0f.firebaseapp.com",
    projectId: "react-counter-app-7ac0f",
    storageBucket: "react-counter-app-7ac0f.appspot.com",
    messagingSenderId: "23815909494",
    appId: "1:23815909494:web:a9acf3c556510e07f4af57",
    measurementId: "G-STVY157LWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };