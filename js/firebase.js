// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhG80WZeI3tyGjRkGdBeNdd0pVzq_D7YA",
  authDomain: "mauriciotiendasesda.firebaseapp.com",
  projectId: "mauriciotiendasesda",
  storageBucket: "mauriciotiendasesda.appspot.com",
  messagingSenderId: "305991658386",
  appId: "1:305991658386:web:b771f15d039c93812e2f4b",
  measurementId: "G-JH9SRBGHLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);