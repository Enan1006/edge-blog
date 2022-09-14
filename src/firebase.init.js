// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB7zaZPGxXLLRdT4kLY2TMv1EA1c9nIUA",
    authDomain: "edge-blog-16042.firebaseapp.com",
    projectId: "edge-blog-16042",
    storageBucket: "edge-blog-16042.appspot.com",
    messagingSenderId: "495716037047",
    appId: "1:495716037047:web:5b26bc0ff881bd487fb832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;