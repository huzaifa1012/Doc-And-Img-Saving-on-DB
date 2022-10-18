import { auth, db, storage } from "./firebaseconfig.js"
import { onAuthStateChanged, deleteUser } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js"
    ;
onAuthStateChanged(auth, (user) => {

    // /deleting Account
    let deletingUS = document.querySelector("#deleteAcc")
    deletingUS.addEventListener("click", deleteAcc)
    function deleteAcc() {
        const user = auth.currentUser;
        deleteUser(user).then(() => {
            swal("Your Account Has Been Deleted");
            console.log("sdas")

        }).catch((error) => {
            // An error ocurred
            console.log("NHI HUA DEKE")
            // ...
        });
    }
    // /deleting Account End Here

    if (user) {

        let submit = document.querySelector("#submit")
        submit.addEventListener("click", sumbitData)
        function sumbitData() {
            let name = document.querySelector("#name")
            let email = document.querySelector("#email")
            let password = document.querySelector("#password")
            let profileImg = document.querySelector("#profile")
            try {
                savingDocOnDB()
                async function savingDocOnDB() {
                    const docRef = await addDoc(collection(db, "Your Data"), {
                        name: name.value,
                        email: email.value,
                        password: password.value,
                        uid: auth.currentUser.uid,

                    });
                    savingImgOnDB()

                    function savingImgOnDB() {
                        let files = profileImg.files[0]

                        const storageRef = ref(storage, `My-IMAGES/${files.name}`);

                        // 'file' comes from the Blob or File API
                        uploadBytes(storageRef, files).then((asd) => {
                            console.log( asd , 'Uploaded a blob or file!');
                        });


                    }


                    swal("Done", "Your Data is Saved", "success");

                }
            }
            catch (e) {
                console.log("Sorry We Can't Save Data on Firestore")
                swal("oOPs Your Data is Not Successfully Saved On Data Base ")

            }
        }
    } else {
        swal("You'r Not Logged In Here");
    }
});
onAuthStateChanged(auth, (user) => {
    if (user) {
    }
    else {

        const promise1 = new Promise((resolve, reject) => {
            resolve(
                swal("You'r Not Logged In Here")
            );
        });
        promise1.then((value) => {
            window.location = ("./index.html")
        });




    }

})
