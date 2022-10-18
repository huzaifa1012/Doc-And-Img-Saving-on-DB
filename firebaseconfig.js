
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyDWekvRwfbFtKodjuRb3wLq2teGgFIeO9s",
    authDomain: "sum-proj-6f3f9.firebaseapp.com",
    projectId: "sum-proj-6f3f9",
    storageBucket: "sum-proj-6f3f9.appspot.com",
    messagingSenderId: "282401193970",
    appId: "1:282401193970:web:0bd5f61c890f8437bcf56b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);