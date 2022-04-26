// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsmk4PvlZywbEXkOOG2TwNmCQBgPSPyNU",
  authDomain: "fir-react-cba3c.firebaseapp.com",
  projectId: "fir-react-cba3c",
  storageBucket: "fir-react-cba3c.appspot.com",
  messagingSenderId: "610162812030",
  appId: "1:610162812030:web:a53185e4795394043de42f",
  measurementId: "G-J8PEGPGWK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);