import * as firebase from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js';
import 'https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js';
// Other Firebase imports and code


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLGsylbDlFIaou3D1aHUWVWkx8r06KmoQ",
    authDomain: "hackathon-16183.firebaseapp.com",
    projectId: "hackathon-16183",
    storageBucket: "hackathon-16183.appspot.com",
    messagingSenderId: "476074673434",
    appId: "1:476074673434:web:6de3f9d55627108f60d8a3",
    measurementId: "G-QJZBLJ5L8W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);