import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBilKAr0yUM2WRxIiIdmkWbPD18Mr07VHA",
    authDomain: "homestock-2d694.firebaseapp.com",
    projectId: "homestock-2d694",
    storageBucket: "homestock-2d694.firebasestorage.app",
    messagingSenderId: "75502730212",
    appId: "1:75502730212:web:bc660922c60aef311b65f1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
