import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBLGsylbDlFIaou3D1aHUWVWkx8r06KmoQ",
  authDomain: "hackathon-16183.firebaseapp.com",
  projectId: "hackathon-16183",
  storageBucket: "hackathon-16183.appspot.com",
  messagingSenderId: "476074673434",
  appId: "1:476074673434:web:6de3f9d55627108f60d8a3",
  measurementId: "G-QJZBLJ5L8W"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);



let name = document.getElementById("name")
let fathername = document.getElementById("fathername")
let rollNumber = document.getElementById("rollNumber")
let contact = document.getElementById("contact")
let CNIC = document.getElementById("CNIC")
let course = document.getElementById("course")
let sir = document.getElementById("sir")

let picture = document.getElementById("picture")
var reader;
var uploadedImage;
picture.addEventListener("change", function () {
    reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#showPic").style.backgroundImage = `url(${uploadedImage})`;
        document.querySelector("#showPic").style.width = "100px"
        document.querySelector("#showPic").style.height = "100px"
        document.querySelector("#showPic").style.marginLeft = "70px"
        document.querySelector("#showPic").style.borderRadius = "10px"
    });
    reader.readAsDataURL(this.files[0]);
});
const sendstudentDAta = async () => {
    if (name.value != "" && fathername.value != "" && rollNumber.value != "" && contact.value != "" && CNIC.value != "" && picture.files != "" && course.value != "" && sir.value != "") {
        await addDoc(collection(db, "Students"), {
            studentname: name.value,
            fathername: fathername.value,
            rollNumber:rollNumber.value,
            contact: contact.value,
            CNIC: CNIC.value,
            sirName: sir.value,
            course: course.value,
        });
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yess!",
        });
        name.value = ""
        fathername.value = ""
        contact.value = ""
        CNIC.value = ""
        rollNumber.value = ""

    }
    else {
        swal("Please Enter Values")
    }
}

window.sendstudentDAta = sendstudentDAta