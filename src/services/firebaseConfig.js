import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAlkI8YtmsncA_fbfJWy4m57V1IZFWqyx0",
    authDomain: "approta-919e4.firebaseapp.com",
    projectId: "approta-919e4",
    storageBucket: "approta-919e4.appspot.com",
    messagingSenderId: "803694913610",
    appId: "1:803694913610:web:b3145f85ab46a451a8deb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)