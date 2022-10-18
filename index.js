import { auth } from "./firebaseconfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"







let SignIn = document.querySelector("#login")
SignIn.addEventListener('click', login)



function login() {
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            location="./main.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Sorry We Can Login You ")
        });
}