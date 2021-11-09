// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYGLphKPSsOWlj2N-ekpoVkhsf5PpcIQU",
    authDomain: "contact-form-52073.firebaseapp.com",
    projectId: "contact-form-52073",
    storageBucket: "contact-form-52073.appspot.com",
    messagingSenderId: "948292887150",
    appId: "1:948292887150:web:382528f8418514b6f7bc7f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }
  