import { auth } from "./firebaseconfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
// const auth = getAuth(app);



let register = document.querySelector("#register")
register.addEventListener('click', registerUser)




function registerUser() {
  let email = document.querySelector("#email")
  let password = document.querySelector("#password")

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        location="./main.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Sorry We Can't Create Your Account (Due To Your Mistake) ")
      });

}