// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx3Ckles4qYmnST08XSj-eRuFZXIA2uMQ",
    authDomain: "a12-learn-logix.firebaseapp.com",
    projectId: "a12-learn-logix",
    storageBucket: "a12-learn-logix.appspot.com",
    messagingSenderId: "345343152249",
    appId: "1:345343152249:web:cd20e80986e00db020c4a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;