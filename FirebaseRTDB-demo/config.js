// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXpvc-bHJwaLPyVyRULlppWYJ8RqrdMLY",
    authDomain: "ameya-aqi.firebaseapp.com",
    databaseURL: "https://ameya-aqi-default-rtdb.firebaseio.com",
    projectId: "ameya-aqi",
    storageBucket: "ameya-aqi.firebasestorage.app",
    messagingSenderId: "263938714691",
    appId: "1:263938714691:web:e7b1ced1d911b41f5eb8f6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApp().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

export { db };




