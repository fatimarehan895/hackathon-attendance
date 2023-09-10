import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {  getFirestore,collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

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
const db = getFirestore(app);
let name = document.getElementById("name")
let contain = document.getElementById("contain")
window.onload = async() => {
    const querySnapshot = await getDocs(collection(db, "Students"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let div = `
        <div class="card">
                <div class="img">
                    <img src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1668262795~exp=1668263395~hmac=865617d225fe7d6915f3243e238414806bcf4930d3b031c6257203c58ffb796d" alt="">
                </div>
                <div class="data">
                    <div class="text">
                        <div class="text_name" id="name">Name</div>
                        <div class="text_data">${doc.data().studentname}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Father Name</div>
                        <div class="text_data">${doc.data().fathername}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Father Name</div>
                        <div class="text_data">${doc.data().rollNumber}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Contact</div>
                        <div class="text_data">${doc.data().contact}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">CNIC</div>
                        <div class="text_data">${doc.data().CNIC}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Course Name</div>
                        <div class="text_data">${doc.data().course}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Status</div>
                        <div class="text_data">✔</div>
                    </div>
                </div>
            </div>
        `
        contain.innerHTML += div
    });

}