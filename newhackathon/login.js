import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";


import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBLGsylbDlFIaou3D1aHUWVWkx8r06KmoQ",
    authDomain: "hackathon-16183.firebaseapp.com",
    projectId: "hackathon-16183",
    storageBucket: "hackathon-16183.appspot.com",
    messagingSenderId: "476074673434",
    appId: "1:476074673434:web:6de3f9d55627108f60d8a3",
    measurementId: "G-QJZBLJ5L8W"
};
import {
    doc, getDoc, getFirestore,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
let email;
let password;
async function Login() {
    let login_email = document.getElementById("login_email").value
    let login_password = document.getElementById("login_password").value
    const docRef = doc(db, "Admin", "mmTnoEDSTkYr9zeJacLE");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        if (login_email == docSnap.data().email && login_password == docSnap.data().password) {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
            window.open("admin.html")
        }
    } else {
        swal("User Not Found")
    }
}
let login_btn = document.getElementById("login_btn")
login_btn.addEventListener("click", Login)