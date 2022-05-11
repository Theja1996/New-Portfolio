// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCizp2hE_Z74iXPuWO6bHJoHQplGUTNnAw",
//   authDomain: "portfolio-9d452.firebaseapp.com",
//   projectId: "portfolio-9d452",
//   storageBucket: "portfolio-9d452.appspot.com",
//   messagingSenderId: "892868582146",
//   appId: "1:892868582146:web:7e088238e6281ec9d2401b",
//   measurementId: "G-0MVM9DQ180"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCizp2hE_Z74iXPuWO6bHJoHQplGUTNnAw",
    authDomain: "portfolio-9d452.firebaseapp.com",
    databaseURL: "https://portfolio-9d452-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "portfolio-9d452",
    storageBucket: "portfolio-9d452.appspot.com",
    messagingSenderId: "892868582146",
    appId: "1:892868582146:web:7e088238e6281ec9d2401b",
    measurementId: "G-0MVM9DQ180"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector("#registrationform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector('#subject').value;
    let msg = document.querySelector('#msg').value;
    console.log(name, email, subject, msg);
  
    saveContactInfo(name, email, subject, msg );
  
    document.querySelector("#registrationform").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, subject, msg) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      subject :  subject,
      msg: msg,
    });
  }