// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABoZ7r_GkmVYnT3G01LeFtUT1U6jpc2aU",
    authDomain: "hexa-5939e.firebaseapp.com",
    projectId: "hexa-5939e",
    storageBucket: "hexa-5939e.appspot.com",
    messagingSenderId: "493069039865",
    appId: "1:493069039865:web:73d0780acab28913928a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);